import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from 'src/app/service';
import { AuthService } from 'src/app/service';
import { UserService } from 'src/app/service';
import { ValidationService } from 'src/app/service';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {

  showPassword: boolean = false;
  email: string = "";
  password: string = "";
  isLoginFailed: boolean = false;
  errorMessage: string = "";
  alertController: any;
  upozorneni: string = "";
  email1: string = "";

  constructor(private router: Router, private tokenService: TokenService, private authService: AuthService, private userService: UserService, private validationService: ValidationService, public translate: TranslateService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.router.navigate(["profile"]);
    }
  }

  login(): void {
    if (this.validationService.validateLogin(this.email, this.password)) {
      this.authService.login(this.email, this.password).subscribe(
        data => {
          this.tokenService.saveToken(data.token);
          this.isLoginFailed = false;
          this.userService.getProfile(data.token).subscribe(
            data0 => {
              this.tokenService.saveUser(data0);
              if (data0.language === "EN") {
                this.translate.use("EN");
              }
              else {
                this.translate.use("CZ");
              }
              this.isLoginFailed = false;
              this.router.navigate(["home"]);
            },
            err => {
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
              if (err.message == "password is not valid") {
                this.upozorneni = "Špatně zadané heslo.";
                console.log("vidim")
              }
            }
          );
        },
        err => {
          if (err.message === "Network Error") {
            this.upozorneni = "Špatné připojení k internetu.";
            console.log("vidim")
          }
          else if (err.message === "user not found with this username:" + this.email) {
            this.upozorneni = "Tohle uživatelské jméno u nás není registrován.";
            console.log("vidim")
          }
          else if (err.message === "user not found with this email:" + this.email) {
            this.upozorneni = "Tento email u nás není registrován.";
            console.log("vidim")
          }
          else if (err.message === "email is not verified") {
            this.upozorneni = "Email nebyl potvrzen. Potvrďte prosím registraci ve svém emailu.";
            console.log("vidim")
          }
          else if (err.message === "password is not valid") {
            this.upozorneni = "Špatně zadané heslo.";
            console.log("vidim")
          }
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    else if (!this.errorMessage) {
      const alert = this.alertController.create({
        header: 'UPOZORNĚNÍ!',
        message: 'Špatně zadaný email.',
        buttons: ['OK'],
      })
    }
  }

  passwordReset(): void {
    if (this.validationService.validateEmail(this.email1)) {
      this.authService.sendPasswdResetEmail(this.email1).subscribe(
        data => {
          window.alert("check your email");
        },
        err => {
        //Anet error handling
        }
      );
    }
    else {
      //Anet error handling
    }
  }
}
