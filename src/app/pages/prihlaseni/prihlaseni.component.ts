import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {
  email!: string;
  password!: string;
  passwordToggleIcon = "eye";
  showPassword!: boolean;
  usernameRegEx = new RegExp('^[a-zA-Z0-9_.-]{4,20}$');
  emailRegEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}');
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.,_-]{8,20}$');

  constructor() { }

  ngOnInit() {
  }

  public usernameCheck(): boolean {
    return this.usernameRegEx.test(this.email);
  }

  public emailCheck(): boolean {
    return this.emailRegEx.test(this.email);
  }

  public passwordCheck(): boolean {
    return this.passwordRegEx.test(this.password);
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }
    else {
      this.passwordToggleIcon = 'eye';
    }
  }

  public login() {}
}
