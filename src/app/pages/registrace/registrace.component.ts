import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from 'src/app/service';
import { ValidationService } from 'src/app/service';

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

  constructor(private router: Router, private validationService: ValidationService, private tokenStorage: TokenService, private translate: TranslateService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(["profile"]);
    }
  }

  register(): void {
    if (this.validationService.validateRegister(this.email, this.password0, this.password1, this.username)) {
    }
  }
}
