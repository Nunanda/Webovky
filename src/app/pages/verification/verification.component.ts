import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private publicService: PublicService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.router.navigate(['/home']);
        this.publicService.verifyEmail(token).subscribe(
          _response => {
            Swal.fire({
              title: 'Email Verification Successful',
              text: 'Your email has been verified!',
              icon: 'success',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/prihlaseni']);
              }
            });
          },
          error => {
            Swal.fire({
              title: 'Email Verification Failed',
              text: error.error.error.message + '. Please try again later.',
              icon: 'error',
            });
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
