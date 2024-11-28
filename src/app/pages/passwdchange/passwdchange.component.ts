import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService, ValidationService } from 'src/app/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passwdchange',
  standalone: false,
  templateUrl: './passwdchange.component.html',
  styleUrls: ['./passwdchange.component.css']
})
export class PasswdchangeComponent implements OnInit {

  showPassword0: boolean = false;
  showPassword1: boolean = false;
  password0: string = "";
  password1: string = "";

  constructor(private validationService: ValidationService, private route: ActivatedRoute, private publicService: PublicService, private router: Router) { }

  ngOnInit(): void {
  }

  changePassword(): void {
    if (this.validationService.validatePassword(this.password0, this.password1)) {
      const token = this.route.snapshot.queryParamMap.get('token');
      if (token) {
        this.publicService.changePassword(token, this.password0, this.password1).subscribe(
          _response => {
            Swal.fire({
              title: 'Password Change Successful',
              text: 'Your password has been updated!',
              icon: 'success',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/prihlaseni']);
              }
            });
          },
          error => {
            Swal.fire({
              title: 'Change Password Failed',
              text: error.error.error.message + '. Please try again later.',
              icon: 'error',
            });
          }
        )
      } else {
        Swal.fire({
          title: 'Change Password Failed',
          text: 'No token included. Please try again later.',
          icon: 'error',
        });
      }
    }
  }
}
