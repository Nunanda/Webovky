import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  element1: HTMLElement | null;
  element2: HTMLElement | null;
  element3: HTMLElement | null;

  constructor(private router: Router) {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
  }
  title = 'Webovky';
  ngOnInit(): void {
    this.router.navigate(['home']);
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
  }

  public opencloseNav() {
    if (this.element1?.getAttribute("style") == "height: 0") {
      this.element1?.setAttribute("style", "height: 100%");
    }
    else {
      this.element1?.setAttribute("style", "height: 0");
    }

  }

  public showHidePomucky() {
    if (this.element2?.getAttribute("style") === "display: block") {
      this.element2?.setAttribute("style", "display: none");
    }
    else {
      this.element2?.setAttribute("style", "display: block");
    }
  }

  public showHideSlovnik() {
    if (this.element3?.getAttribute("style") === "display: block") {
      this.element3?.setAttribute("style", "display: none");
    }
    else {
      this.element3?.setAttribute("style", "display: block");
    }
  }
}
