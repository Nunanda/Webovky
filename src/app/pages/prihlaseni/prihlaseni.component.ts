import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
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
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = "";
  alertController: any;
  formGroup: any;
  formBuilder: any;
  upozorneni: string = "";
  

  constructor(private router: Router, private tokenStorage: TokenService, private authService: AuthService, private userService: UserService, private validationService: ValidationService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(["profile"]);
    }

    this.formGroup = this.formBuilder.group({
      toDo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
  });
  }

  login(): void {
    if (this.validationService.validateLogin(this.email, this.password)) {
      this.authService.login(this.email, this.password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.userService.getProfile(data.token).subscribe(
            data => {
              this.tokenStorage.saveUser(data);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.reloadPage();
            },
            err => {
              
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
            }
          );
        },
        err => {
          if (err.message == "Network Error") {
             console.log("Internet")
            this.upozorneni = "Špatné připojení k internetu.";
          }

          else if (err.message == "user not found with this username:" + this.email) {
            console.log("email")
            this.upozorneni = "Tohle uživatelské jméno u nás není registrován.";
          }

          else if (err.message == "user not found with this email:" + this.email) {
            this.upozorneni = "Tento email u nás není registrován.";
          }

          else if (err.message == "email is not verified") {
            this.upozorneni = "Email nebyl potvrzen. Potvrďte prosím registraci ve svém emailu.";
          }

          else if (err.message == "password is not valid") {
            this.upozorneni = "Špatně zadané heslo.";
          }

          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    else if(!this.errorMessage) {
      const alert = this.alertController.create({
        header: 'UPOZORNĚNÍ!',
        message: 'Špatně zadaný email.',
        buttons: ['OK'],
      })
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
