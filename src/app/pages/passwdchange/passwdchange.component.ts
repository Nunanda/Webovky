import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, TokenService, ValidationService } from 'src/app/service';

@Component({
  selector: 'app-passwdchange',
  templateUrl: './passwdchange.component.html',
  styleUrls: ['./passwdchange.component.css']
})
export class PasswdchangeComponent implements OnInit {

  showPassword0: boolean = false;
  showPassword1: boolean = false;
  password0: string = "";
  password1: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private validationService: ValidationService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  passwdchange(): void {
    if (this.validationService.validatePassword(this.password0, this.password1)) {
      this.authService.passwdReset(this.route.snapshot.queryParamMap.get('token'), this.password0, this.password1).subscribe(
        data => {
          this.tokenService.signOut();
          this.router.navigate(["prihlaseni"]);
        },
        err => {
          //tady bude kod od Anet: default, 'Invalid or expired verification token', 'User does not exist', 'Failed to update user password'
        }
      );
    }
    else { }//tady bude kód od Anet
  }
}
