import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  verified: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private tokenService: TokenService) { }

  ngOnInit(): void {
  }
}
