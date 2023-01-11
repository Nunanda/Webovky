import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  element: HTMLElement | null;

  constructor(private router: Router) {
    this.element = document.getElementById("myTopnav");
  }
  title = 'Webovky';
  ngOnInit() : void {
    this.router.navigate(['home']);
    this.element = document.getElementById("myTopnav");
  }

  public myFunction() {
    if (this.element?.className === "topnav") {
      this.element.className += " responsive";
    }
    else if (this.element?.className === "topnav responsive") {
      this.element.className = "topnav";
    }
  }
}
