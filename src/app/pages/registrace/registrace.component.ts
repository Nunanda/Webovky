import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError, switchMap } from 'rxjs';
import { KmsService, PublicService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import { Language } from 'src/app/types';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

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

  async signup(): Promise<void> {
    if (this.validationService.validateRegister(this.email, this.password0, this.password1, this.username)) {
      const kekSalt = uuidv4().replace(/-/g, '');
      const initializationVector = uuidv4().replace(/-/g, '');
      const DEK = uuidv4().replace(/-/g, '');
      const KEK = this.password0 + kekSalt;
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
          const wrappedKEK = this.kmsService.encryptSignup(userId, response1.auth.client_token, KEK);
          console.log(wrappedKEK);
          const wrappedDEK = wrappedKEK;
          return this.publicService.saveWrappedDEK(response1.auth.client_token, String(wrappedDEK));
        }),
        catchError(error => {
          console.log(error);
          return [];
        })
      )
      .subscribe(response2 => {
        console.log(response2)
        Swal.fire({
          title: 'Successful Registration',
          text: 'Verify your email within 1 hour',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/prihlaseni']);
          }
        });
      });
    }
  }
}
