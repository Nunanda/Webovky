import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicService, TokenService } from 'src/app/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  verified: boolean = false;

  constructor(private route: ActivatedRoute, private publicService: PublicService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.publicService.verifyEmail(token).subscribe(
          response => {
            Swal.fire('Hi', 'Email verified', 'success');
            this.verified = true;
            this.tokenService.signOut();
            this.router.navigate(["prihlaseni"]);
          },
          error => {
            console.log(error.error.error.message);
            //error
          }
        );
      } else {
        //no token
      }
    });
  }
}
