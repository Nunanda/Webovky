import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  element!: HTMLElement | null;

  constructor(private router: Router) { }
  title = 'Webovky';
  ngOnInit() : void {
    this.router.navigate(['home']);
    this.element = document.getElementById("myTopnav");
  }

  myFunction() {
    if (this.element?.className === "topnav") {
      this.element.className += " responsive";
    }
  }
}
