import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private tokenStorage: TokenService, private authService: AuthService, private userService: UserService, private validationService: ValidationService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(["profile"]);
    }
  }

  login(): void {
    if (this.validationService.validateLogin(this.email, this.password)) {
      this.authService.login(this.email, this.password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.isLoginFailed = false;
          this.userService.getProfile(data.token).subscribe(
            data => {
              this.tokenStorage.saveUser(data);
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
          if (err.message == "Network Error") {
            this.upozorneni = "Špatné připojení k internetu.";
            console.log("vidim")
          }
          else if (err.message == "user not found with this username:" + this.email) {
            this.upozorneni = "Tohle uživatelské jméno u nás není registrován.";
            console.log("vidim")
          }
          else if (err.message == "user not found with this email:" + this.email) {
            this.upozorneni = "Tento email u nás není registrován.";
            console.log("vidim")
          }
          else if (err.message == "email is not verified") {
            this.upozorneni = "Email nebyl potvrzen. Potvrďte prosím registraci ve svém emailu.";
            console.log("vidim")
          }
          else if (err.message == "password is not valid") {
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
}
