import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService, InstructionService, PomuckyService, SlovnikService, TokenService } from 'src/app/service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

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
  items: Array<string> = new Array<string>;;
  search: string | undefined;
  imageURL: string = "assets/icon/account.svg";

  constructor(private vyukaService: VyukaService, private slovnikService: SlovnikService, private pomuckyService: PomuckyService, private instructionService: InstructionService, private router: Router, public translate: TranslateService, private tokenService: TokenService) {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
    translate.addLangs(['CZ', 'EN']);
    if (localStorage.getItem("language") === "EN") {
      this.translate.currentLang = 'EN';
      this.translate.setDefaultLang('EN');
      this.translate.use('EN');
    }
    else {
      this.translate.currentLang = 'CZ';
      this.translate.setDefaultLang('CZ');
      this.translate.use('CZ');
    }
  }

  ngOnInit(): void {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
    this.items = [...this.vyukaService.getTitles(), ...this.slovnikService.getTitles(), ...this.pomuckyService.getTitles(), ...this.instructionService.getAllTitles()];
    this.items.sort();
    this.imageURL = this.tokenService.getPicture() || "assets/icon/account.svg";
  }

  ngDoCheck(): void {
    this.element1 = document.getElementById("mySidenav");
    this.element2 = document.getElementById("dropdown-content0");
    this.element3 = document.getElementById("dropdown-content1");
    this.element4 = document.getElementById("dropdown-content2");
    this.items = [...this.vyukaService.getTitles(), ...this.slovnikService.getTitles(), ...this.pomuckyService.getTitles(), ...this.instructionService.getAllTitles()];
    this.items.sort();
    this.imageURL = this.tokenService.getPicture() || "assets/icon/account.svg";
  }

  getRoute(item: string): void {
    if (this.vyukaService.getTitles().includes(item)) {
      localStorage.setItem("nazev", this.vyukaService.getVsechnyVyrobky().find(item0 => item0.title == item)?.nazev!);
      this.router.navigate(["vyukovymod/vyukovymod-detail/"]);
    }
    else if (this.instructionService.getAllTitles().includes(item)) {
      localStorage.setItem("nazev", this.instructionService.getAllInstructions().find(item0 => item0.title == item)?.title!);
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

  switchLanguage(lang: string): Observable<any> {
    localStorage.setItem("language", lang);
    return this.translate.use(lang);
  }

  opencloseNav(): void {
    if (this.element1?.getAttribute("style") == "height: 0") {
      this.element1?.setAttribute("style", "height: 100%");
    }
    else {
      this.element1?.setAttribute("style", "height: 0");
    }
  }

  showHidePomucky(): void {
    if (this.element2?.getAttribute("style") === "display: block") {
      this.element2?.setAttribute("style", "display: none");
    }
    else {
      this.element2?.setAttribute("style", "display: block");
    }
  }

  showHideSlovnik(): void {
    if (this.element3?.getAttribute("style") === "display: block") {
      this.element3?.setAttribute("style", "display: none");
    }
    else {
      this.element3?.setAttribute("style", "display: block");
    }
  }

  showHideNavody(): void {
    if (this.element4?.getAttribute("style") === "display: block") {
      this.element4?.setAttribute("style", "display: none");
    }
    else {
      this.element4?.setAttribute("style", "display: block");
    }
  }

}
