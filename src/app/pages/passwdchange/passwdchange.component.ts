import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService, TokenService, ValidationService } from 'src/app/service';
import Swal from 'sweetalert2';

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

  constructor(private validationService: ValidationService, private route: ActivatedRoute, private publicService: PublicService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  passwdchange(): void {
    if (this.validationService.validatePassword(this.password0, this.password1)) {
      const token = this.route.snapshot.queryParamMap.get('token');
      if (token) {
        this.publicService.changePassword(token, this.password0, this.password1).subscribe(
          response => {
            Swal.fire('Hi', 'Password changed', 'success');
            this.tokenService.signOut();
            this.router.navigate(["prihlaseni"]);
          },
          error => {
            console.log(error.error.error.message);
            //error
          }
        )
      } else {
        //no token
      }
    }
  }
}
