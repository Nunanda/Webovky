import { Component, OnInit } from '@angular/core';

export enum Language {
  CZ = 'CZ',
  EN = 'EN',
}

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
  Language: Language = Language.CZ;

  constructor() { }

  ngOnInit(): void {
  }

  async register() {
  }
}
