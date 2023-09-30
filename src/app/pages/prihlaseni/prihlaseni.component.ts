import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrivateService, PublicService, TokenService } from 'src/app/service';
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

  constructor(private router: Router, private tokenService: TokenService, private validationService: ValidationService, public translate: TranslateService, private publicService: PublicService, private privateService: PrivateService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.router.navigate(["profile"]);
    }
  }

  login(): void {
    if (this.validationService.validateLogin(this.email, this.password)) {
      this.publicService.login(this.email, this.password).subscribe(
        response => {
          this.tokenService.saveToken(response.data.token);
          this.privateService.getUser().subscribe(
            response1 => {
              if (response1.language === "EN") {
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
            error1 => {
              this.errorMessage1 = error1.error.error.message;
            }
          )
        },
        error => {
          this.errorMessage = error.error.error.message;
        }
      );
    }
  }

  passwordReset(): void {
    if (this.validationService.validateEmail(this.email1)) {
      this.publicService.sendPasswordChange(this.email1).subscribe(
        _response => {
          Swal.fire('Hi', 'Check your mailbox', 'success');
        },
        error => {
          this.errorMessage1 = error.error.error.message;
        }
      );
    }
  }
}
