import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PublicService, TokenService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {

  showPassword: boolean = false;
  password: string = "";
  email: string = "";
  email1: string = "";

  constructor(private router: Router, private validationService: ValidationService, public translate: TranslateService, private publicService: PublicService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.publicService.login(this.email, this.password).subscribe(
      response => {
        this.tokenService.saveToken(response.token);
        this.router.navigate(['/home']);
      },
      error => {
        Swal.fire({
          title: 'Login Failed',
          text: error.error.error.message + '. Please try again later.',
          icon: 'error',
        });
      }
    );
  }

  sendPasswordChange(): void {
    if (this.validationService.validateEmail(this.email1)) {
      this.publicService.sendPasswordChange(this.email1).subscribe();
      Swal.fire({
        title: 'Password Reset',
        text: 'If you are registered, you should check your mailbox.',
        icon: 'info',
      });
    }
  }
}
