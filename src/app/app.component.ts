import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  element1: HTMLElement | null;
  element2: HTMLElement | null;
  element3: HTMLElement | null;
  element4: HTMLElement | null;

  constructor(private router: Router, public translate: TranslateService) {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
    translate.addLangs(['CZ','EN']);
    translate.setDefaultLang('CZ');
  }

  ngOnInit(): void {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
  }

  public switchLanguage(lang:string) {
    return this.translate.use(lang);
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

  public showHideNavody() {
    if (this.element4?.getAttribute("style") === "display: block") {
      this.element4?.setAttribute("style", "display: none");
    }
    else {
      this.element4?.setAttribute("style", "display: block");
    }
  }
}
