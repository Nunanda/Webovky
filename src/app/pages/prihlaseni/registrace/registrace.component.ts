import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.css']
})
export class RegistraceComponent implements OnInit {
  passwordToggleIcon = "visibility";
  showPassword!: boolean;
  passwordToggleIcon2 = "visibility";
  showPassword2!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'visibility') {
      this.passwordToggleIcon = 'visibility_off';
    }
    else {
      this.passwordToggleIcon = 'visibility';
    }
  }

  public togglePassword2() {
    this.showPassword2 = !this.showPassword2;
    if (this.passwordToggleIcon2 == 'visibility') {
      this.passwordToggleIcon2 = 'visibility_off';
    }
    else {
      this.passwordToggleIcon2 = 'visibility';
    }
  }
}
