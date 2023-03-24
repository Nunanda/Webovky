import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {

  showPassword: boolean = false;
  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit() {
  }

  async login() {
  }
}
