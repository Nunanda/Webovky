import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { KmsService, PublicService, TokenService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import { Language } from 'src/app/types';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
const myUuid = uuidv4();

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
  errorMessage: string = "";

  constructor(private router: Router, private publicService: PublicService, private validationService: ValidationService, private tokenStorage: TokenService, private translate: TranslateService, private kmsService: KmsService) { }

  ngOnInit(): void {
  }

  async register(): Promise<void> {
    if (this.validationService.validateRegister(this.email, this.password0, this.password1, this.username)) {
      const kekSalt = uuidv4().replace(/-/g, '');
      const initializationVector = uuidv4().replace(/-/g, '');
      const DEK = uuidv4().replace(/-/g, '');
      /*this.publicService.signup(this.email, this.username, this.password0, this.password1, this.translate.currentLang as Language, kekSalt, initializationVector).subscribe(
        response => {
          Swal.fire('Welcome', 'Verify your email within 1 hour', 'success');
          this.router.navigate(["prihlaseni"]);
          console.log(response.data.token);
          this.kmsService.userpassLogin(response.data.userId, this.password0).subscribe(
            response1 => {
              this.tokenStorage.saveKmsToken(response1.data.token);
            },
            error => {
              //error
            }
          )
        },
        error => {
          this.errorMessage = error.error.error.message;
          //error
        }
      )*/
    }
  }
}
