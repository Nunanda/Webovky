import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  element: HTMLElement | null;
  element1: HTMLElement | null;
  element2: HTMLElement | null;
  element3: HTMLElement | null;

  constructor(private router: Router) {
    this.element = document.getElementById("mySidenav");
    this.element1 = document.getElementById("main");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
  }
  title = 'Webovky';
  ngOnInit(): void {
    this.router.navigate(['home']);
    this.element = document.getElementById("mySidenav");
    this.element1 = document.getElementById("main");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
  }

  public openNav() {
    this.element?.setAttribute("style", "height: 100%");
    
  }

  public closeNav() {
    this.element?.setAttribute("style", "height: 0%");
    
  }

  public showHidePomucky() {
    if (this.element2?.getAttribute("style") == "display: block") {
      this.element2?.setAttribute("style", "display: none");
    }
    else {
      this.element2?.setAttribute("style", "display: block");
    }
  }

  public showHideSlovnik() {
    if (this.element3?.getAttribute("style") == "display: block") {
      this.element3?.setAttribute("style", "display: none");
    }
    else {
      this.element3?.setAttribute("style", "display: block");
    }
  }
}
