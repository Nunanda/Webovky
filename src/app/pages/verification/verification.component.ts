import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicService, TokenService } from 'src/app/service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private publicService: PublicService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.router.navigate(['/home']);
        this.publicService.verifyEmail(token).subscribe(
          response => {
            const verificationSuccess = response.data;
            if (verificationSuccess) {
              Swal.fire({
                title: 'Email Verification Successful',
                text: 'Your email has been verified!',
                icon: 'success',
              });
              this.router.navigate(['/prihlaseni']);
            } else {
              Swal.fire({
                title: 'Email Verification Failed',
                text: 'Invalid or expired token. Please try again.',
                icon: 'error',
              });
            }
          },
          error => {
            Swal.fire({
              title: 'Email Verification Failed',
              text: 'Invalid or expired token. Please try again.',
              icon: 'error',
            });
            //error
          }
        );
      } else {
        Swal.fire({
          title: 'Email Verification Failed',
          text: 'No token included. Please try again.',
          icon: 'error',
        });
      }
    });
  }
}
