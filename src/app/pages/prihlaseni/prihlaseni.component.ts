import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {
  passwordToggleIcon = "visibility";
  showPassword!: boolean;

  constructor() { }

  ngOnInit() {
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

  public login() {}
}
