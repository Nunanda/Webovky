import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/service/auth.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.css']
})
export class RegistraceComponent implements OnInit {

  showPassword0: boolean = false;
  showPassword1: boolean = false;
  email: string = "";
  username: string = "";
  password0: string = "";
  password1: string = "";
  language: Language = Language.CZ;
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register(this.email, this.password0, this.username, this.language).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
