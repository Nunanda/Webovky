import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import { Language } from 'src/app/types';

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
  language: Language = Language.CZ;
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = "";
  alertController: any;
  upozorneni: string = "";
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.@#$%^&*_-]{8,20}$');

  constructor(private authService: AuthService, private validationService: ValidationService) { }

  ngOnInit(): void {
  }

  ngOnReload() {
    console.log(this.language);
  }

  public passwordCheck(): boolean{
    return this.passwordRegEx.test(this.password0) && this.passwordRegEx.test(this.password1)
  }

  register(): void {
    if (this.validationService.validateRegister(this.email, this.password0, this.password1, this.username)) {
     /* this.authService.register(this.email, this.password0, this.username, this.language).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          if (err == "Network Error") {
            this.upozorneni = "Špatné připojení k internetu.";
          }
          else if (err == "email already exist:" + this.email) {
            this.upozorneni = "Zadaný email již existuje."
          }

          else if (err == "username already exist:" + this.email) {
            this.upozorneni = "zadané uživatelské jméno již existuje."
          }

          else if (err == "username already exist:" + this.email) {
            this.upozorneni = "zadané uživatelské jméno již existuje."
          }

          else {
            this.upozorneni ;
          }
        }
      );*/
    }
    else if(this.validationService.validatePassword(this.password0, this.password1)) {
      this.upozorneni = "Zadaná hesla se neshodují."
    }
    else if (!this.email) {
      this.upozorneni = "Špatně zadaný email, nebo uživatelské jméno."
    }
  }
}
