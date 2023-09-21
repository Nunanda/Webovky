import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from 'src/app/service';
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
  errorMessage: string = "";
  email1: string = "";
  errorMessage1: string = "";

  constructor(private router: Router, private tokenService: TokenService, private validationService: ValidationService, public translate: TranslateService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.router.navigate(["profile"]);
    }
  }

  login(): void {
    if (this.validationService.validateLogin(this.email, this.password)) {
    }
  }

  passwordReset(): void {
    if (this.validationService.validateEmail(this.email1)) {
    }
  }
  
  blobToBase64(blob: Blob, callback: (base64String: string) => void) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      callback(base64String);
    };
    reader.readAsDataURL(blob);
  }
}
