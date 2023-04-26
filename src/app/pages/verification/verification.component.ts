import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verified = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      // Anet Handle error: no token found in URL
      return;
    }

    this.http.post(environment.apiUrl + '/verify-email', {token}).subscribe(
      () => {
        this.verified = true;
      },
      (error) => {
        console.log(error);
        // Anet Handle error: email verification failed
      }
    );
  }
}
