import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs';
import { KmsService, PublicService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import { Language } from 'src/app/types';
import Swal from 'sweetalert2';
import * as pbkdf2 from 'pbkdf2';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.css']
})
export class RegistraceComponent implements OnInit {

  showPassword0: boolean = false;
  showPassword1: boolean = false;
  email: string = "";
  username: string = "";
  password0: string = "";
  password1: string = "";

  constructor(private router: Router, private publicService: PublicService, private validationService: ValidationService, private translate: TranslateService, private kmsService: KmsService) { }

  ngOnInit(): void {
  }

  signup(): void {
    if (this.validationService.validateRegister(this.email, this.password0, this.password1, this.username)) {
      const kekSalt = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
      const initializationVector = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
      let token: string;
      let userId: string;
      this.publicService.signup(this.email, this.username, this.password0, this.password1, this.translate.currentLang as Language, kekSalt, initializationVector)
        .pipe(
          switchMap(response => {
            token = response.token;
            userId = response.userId;
            return this.kmsService.userpassLogin(response.userId, this.password0);
          }),
          switchMap(response1 => {
            console.log(response1)
            const KEK = pbkdf2.pbkdf2Sync(this.password0, kekSalt, 10000, 256 / 8, 'sha512');
            return this.kmsService.encryptSignup(userId, response1.auth.client_token, CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(KEK.toString())));
          }),
          switchMap(response2 => {
            console.log(response2)
            const DEK = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
            const wrappedDEK = CryptoJS.AES.encrypt(DEK, response2.data.ciphertext, {
              mode: CryptoJS.mode.CFB,
              padding: CryptoJS.pad.Pkcs7,
            });
            return this.publicService.saveWrappedDEK(token, wrappedDEK.toString());
          })
        )
        .subscribe(_response3 => {
          Swal.fire({
            title: 'Successful Registration',
            text: 'Verify your email within 1 hour',
            icon: 'success',
          }).then((result) => {
            this.password0 = "";
            this.password1 = "";
            if (result.isConfirmed) {
              this.router.navigate(['/prihlaseni']);
            }
          });
        },
          error => {
            this.password0 = "";
            this.password1 = "";
            try {
              Swal.fire({
                title: 'Registration Failed',
                text: error.error.error.message + '. Please try again later.',
                icon: 'error',
              });
            } catch(_error) {
              Swal.fire({
                title: 'Registration Failed',
                text: 'An error occurred. Please try again later.',
                icon: 'error',
              });
            }
          }
        );
    }
  }
}
