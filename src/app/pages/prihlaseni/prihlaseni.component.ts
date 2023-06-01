import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from 'src/app/service';
import { AuthService } from 'src/app/service';
import { UserService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {

  showPassword: boolean = false;
  email: string = "";
  password: string = "";
  errorMessage: string = "";
  email1: string = "";
  errorMessage1: string = "";


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
          this.userService.getProfile(data.token).subscribe(
            data0 => {
              this.tokenService.saveUser(data0);
              if (data0.language === "EN") {
                this.translate.currentLang = 'EN';
                this.translate.setDefaultLang('EN');
                this.translate.use('EN');
              }
              else {
                this.translate.currentLang = 'CZ';
                this.translate.setDefaultLang('CZ');
                this.translate.use('CZ');
              }
              this.router.navigate(["home"]);
            },
            _err1 => {
            }
          );
        },
        err => {
          this.errorMessage = err.error.error.message;
        }
      );
    }
  }

  passwordReset(): void {
    if (this.validationService.validateEmail(this.email1)) {
      this.authService.sendPasswdResetEmail(this.email1).subscribe(
        _data => {
          Swal.fire('Hi', 'Check your mailbox', 'success');
        },
        err => {
          this.errorMessage1 = err.error.error.message;
        }
      );
    }
  }
}
