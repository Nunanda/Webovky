import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService, NavodyService, PomuckyService, SlovnikService, TokenService } from './service';
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
  items: Array<string>;
  search: any;

  constructor(private vyukaService: VyukaService, private slovnikService: SlovnikService, private pomuckyService: PomuckyService, private navodyService: NavodyService, private router: Router, public translate: TranslateService, private tokenService: TokenService) {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
    this.items = new Array<string>;
    translate.addLangs(['CZ', 'EN']);
    if (this.tokenService.getUser().language === "EN") {
      translate.setDefaultLang('EN');
      translate.use('EN');
    }
    else {
      translate.setDefaultLang('CZ');
    }
  }

  ngOnInit(): void {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
    this.items = [...this.vyukaService.getTitles(), ...this.slovnikService.getTitles(), ...this.pomuckyService.getTitles(), ...this.navodyService.getTitles()];
    this.items.sort();
  }

  ngDoCheck() {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
    this.items = [...this.vyukaService.getTitles(), ...this.slovnikService.getTitles(), ...this.pomuckyService.getTitles(), ...this.navodyService.getTitles()];
    this.items.sort();
  }

  getRoute(item: string) {
    if (this.vyukaService.getTitles().includes(item)) {
      localStorage.setItem("nazev", this.vyukaService.getVsechnyPomucky().find(item0 => item0.title == item)?.nazev!);
      this.router.navigate(["vyukovymod/vyukovymod-detail/"]);
    }
    else if (this.navodyService.getTitles().includes(item)) {
      localStorage.setItem("nazev", this.navodyService.getVsechnyNavody().find(item0 => item0.title == item)?.nazev!);
      this.router.navigate(["navody/navody-detail/"]);
    }
    else if (this.slovnikService.getTitles().includes(item)) {
      this.router.navigate(["slovnik/" + this.slovnikService.getVsechnyStyly().find(item0 => item0.title == item)?.nazev!]);
    }
    else if (this.pomuckyService.getTitles().includes(item)) {
      this.router.navigate(["pomucky/" + this.pomuckyService.getVsechnyPomucky().find(item0 => item0.title == item)?.nazev!]);
    }
    this.search = "";
  }

  public switchLanguage(lang: string) {
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
