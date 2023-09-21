import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService, ValidationService } from 'src/app/service';

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

  constructor(private route: ActivatedRoute, private router: Router, private validationService: ValidationService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  passwdchange(): void {
    if (this.validationService.validatePassword(this.password0, this.password1)) {
    }
    else { }//tady bude kód od Anet
  }
}
