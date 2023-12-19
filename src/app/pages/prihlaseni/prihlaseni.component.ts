import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs';
import { PublicService, PrivateService, TokenService, ValidationService, KmsService } from 'src/app/service';
import Swal from 'sweetalert2';
import * as pbkdf2 from 'pbkdf2';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {

  showPassword: boolean = false;
  password: string = "";
  email: string = "";
  email1: string = "";
  isLoading: boolean = false;

  constructor(private router: Router, private validationService: ValidationService, public translate: TranslateService, private publicService: PublicService, private privateService: PrivateService, private tokenService: TokenService, private kmsService: KmsService) { }

  ngOnInit(): void {
  }

  login(): void {
    let userId: string;
    let kekSalt: string;
    let wrappedDEK: string;
    let initializationVector: string;
    this.isLoading = true;
    this.publicService.login(this.email, this.password)
      .pipe(
        switchMap(response => {
          this.tokenService.saveToken(response.token);
          return this.privateService.getUser();
        }),
        switchMap(response1 => {
          userId = response1.id;
          kekSalt = response1.kekSalt;
          wrappedDEK = response1.wrappedDEK;
          initializationVector = response1.initializationVector;
          return this.kmsService.userpassLogin(response1.id, this.password);
        }),
        switchMap(response2 => {
          const KEK = pbkdf2.pbkdf2Sync(this.password, kekSalt, 10000, 256 / 8, 'sha512');
          this.tokenService.saveKEK(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(KEK.toString())));
          this.tokenService.saveKmsToken(response2.auth.client_token);
          return this.kmsService.encryptData(userId, CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(KEK.toString())));
        })
      )
      .subscribe(response3 => {
        const wrappedDEKBase64 = wrappedDEK;
        const wrappedDEKWordArray = CryptoJS.enc.Base64.parse(wrappedDEKBase64);
        const decryptedDEKWordArray = CryptoJS.AES.decrypt(
          CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(wrappedDEKWordArray.toString())),
          response3.data.ciphertext,
          {
            mode: CryptoJS.mode.CFB,
            padding: CryptoJS.pad.Pkcs7,
            iv: CryptoJS.enc.Hex.parse(initializationVector.toString()),
          }
        );
        const decryptedDEKHex = CryptoJS.enc.Hex.stringify(decryptedDEKWordArray);
        userId = "";
        kekSalt = "";
        wrappedDEK = "";
        this.password = "";
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
        error0 => {
          userId = "";
          kekSalt = "";
          wrappedDEK = "";
          this.password = "";
          this.isLoading = false;
          try {
            if (error0.name === 'TimeoutError') {
              Swal.fire({
                title: 'Login Failed',
                text: 'Request timed out. Please try again later.',
                icon: 'error',
              });
            } else {
              Swal.fire({
                title: 'Login Failed',
                text: error0.error.error.message + '. Please try again later.',
                icon: 'error',
              });
            }
          } catch (_error1) {
            Swal.fire({
              title: 'Registration Failed',
              text: 'An error occurred. Please try again later.',
              icon: 'error',
            });
          }
        }
      );
  }

  sendPasswordChange(): void {
    if (this.validationService.validateEmail(this.email1)) {
      this.isLoading = true;
      this.publicService.sendPasswordChange(this.email1).subscribe(_response4 => {
        this.isLoading = false;
        Swal.fire({
          title: 'Password Reset',
          text: 'If you are registered, you should check your mailbox.',
          icon: 'info',
        });
      },
        error2 => {
          this.isLoading = false;
          try {
            if (error2.name === 'TimeoutError') {
              Swal.fire({
                title: 'Login Failed',
                text: 'Request timed out. Please try again later.',
                icon: 'error',
              });
            } else {
              Swal.fire({
                title: 'Login Failed',
                text: error2.error.error.message + '. Please try again later.',
                icon: 'error',
              });
            }
          } catch (_error3) {
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
