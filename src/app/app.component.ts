import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService, InstructionService, PomuckyService, SlovnikService } from 'src/app/service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Pomucka, Styl } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('menu', { read: ElementRef }) menu: ElementRef | undefined;
  @ViewChild('menu_pomucky', { read: ElementRef }) menuPomucky: ElementRef | undefined;
  @ViewChild('img_pomucky', { read: ElementRef }) imgPomucky: ElementRef | undefined;
  @ViewChild('menu_slovnik', { read: ElementRef }) menuSlovnik: ElementRef | undefined;
  @ViewChild('img_slovnik', { read: ElementRef }) imgSlovnik: ElementRef | undefined;

  menuVisible: boolean = false;
  menuPomuckyVisible: boolean = false;
  menuSlovnikVisible: boolean = false;
  items: string[] | undefined;
  search: string | undefined;
  imageURL: string = "assets/icon/svg/account.svg";
  slovnik: Styl[] | undefined;
  pomucky: Pomucka[] | undefined;
  darkmode: boolean = false;

  constructor(private vyukaService: VyukaService, private slovnikService: SlovnikService, private pomuckyService: PomuckyService, private instructionService: InstructionService, private router: Router, public translate: TranslateService) {
    this.loadResources();
    this.initializeLanguage();
    this.initializeDarkMode();
    if (window.innerWidth > 1100) {
      this.menuVisible = true;
    }
  }

  ngOnInit(): void {
    this.loadResources();
  }

  ngDoCheck(): void {
    this.loadResources();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.toggleMenuVisibility();
  }

  toggleMenuVisibility(): void {
    if (window.innerWidth > 1100) {
      if (this.menu) {
        this.menu.nativeElement.style.display = 'flex';
        this.menu.nativeElement.style.width = "100%";
        this.menuVisible = true;
      }
      if (this.menuPomucky && this.imgPomucky) {
        this.menuPomucky.nativeElement.style.position = 'absolute';
        this.menuPomucky.nativeElement.style.display = 'none';
        this.imgPomucky.nativeElement.src = "assets/icon/svg/down.svg";
        this.menuPomuckyVisible = false;
      }
      if (this.menuSlovnik && this.imgSlovnik) {
        this.menuSlovnik.nativeElement.style.position = 'absolute';
        this.menuSlovnik.nativeElement.style.display = 'none';
        this.imgSlovnik.nativeElement.src = "assets/icon/svg/down.svg";
        this.menuSlovnikVisible = false;
      }
    } else {
      if (this.menu) {
        this.menu.nativeElement.style.width = 0;
        this.menuVisible = false;
      }
      if (this.menuPomucky && this.imgPomucky) {
        this.menuPomucky.nativeElement.style.position = 'relative';
        this.menuPomucky.nativeElement.style.display = 'none';
        this.imgPomucky.nativeElement.src = "assets/icon/svg/down.svg";
        this.menuPomuckyVisible = false;
      }
      if (this.menuSlovnik && this.imgSlovnik) {
        this.menuSlovnik.nativeElement.style.position = 'relative';
        this.menuSlovnik.nativeElement.style.display = 'none';
        this.imgSlovnik.nativeElement.src = "assets/icon/svg/down.svg";
        this.menuSlovnikVisible = false;
      }
    }
  }

  initializeLanguage(): void {
    this.translate.addLangs(['CZ', 'EN']);
    const selectedLanguage = localStorage.getItem("language");
    const browserLanguage = navigator.language.substr(0, 2).toUpperCase();
    const defaultLanguage = selectedLanguage === "EN" ? 'EN' : 'CZ';
    if (selectedLanguage && (selectedLanguage === "EN" || selectedLanguage === "CZ")) {
      this.translate.currentLang = selectedLanguage;
    } else {
      if (browserLanguage == 'CZ') {
        this.translate.currentLang = 'CZ';
      } else {
        this.translate.currentLang = 'EN';
      }
    }
    this.translate.setDefaultLang(this.translate.currentLang);
    this.translate.use(this.translate.currentLang);
    localStorage.setItem("language", this.translate.currentLang);
  }

  initializeDarkMode(): void {
    const userDarkModePreference = localStorage.getItem("darkMode");
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userDarkModePreference === "dark" || userDarkModePreference === "light") {
      document.body.classList.toggle('dark-mode', userDarkModePreference === 'dark');
      if (userDarkModePreference === "dark") {
        this.darkmode = !this.darkmode;
      }
    } else if (prefersDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem("darkMode", "dark");
      this.darkmode = !this.darkmode;
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem("darkMode", "light");
    }
  }

  loadResources(): void {
    this.slovnik = this.slovnikService.getVsechnyStyly();
    this.pomucky = this.pomuckyService.getVsechnyPomucky();
    this.items = [
      ...this.vyukaService.getTitles(),
      ...this.slovnikService.getTitles(),
      ...this.pomuckyService.getTitles(),
      ...this.instructionService.getAllTitles()
    ];
    this.items.sort();
    this.imageURL = "assets/icon/svg/account.svg";
  }

  getRoute(item: string): void {
    if (this.vyukaService.getTitles().includes(item)) {
      this.router.navigate(["vyukovymod/vyukovymod-detail/" + this.vyukaService.getVsechnyVyrobky().find(item0 => item0.title == item)?.nazev!]);
    }
    else if (this.instructionService.getAllTitles().includes(item)) {
      this.router.navigate(["navody/navody-detail/" + (this.instructionService.getAllInstructions().find(item0 => item0.titleEn === item) || this.instructionService.getAllInstructions().find(item0 => item0.titleCz === item))?.id]);
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

  switchDarkmode(): void {
    const userDarkModePreference = localStorage.getItem("darkMode");
    if (userDarkModePreference === "dark") {
      document.body.classList.remove('dark-mode');
      localStorage.setItem("darkMode", "light");
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem("darkMode", "dark");
    }
    this.darkmode = !this.darkmode;
  }

  openCloseNav(): void {
    if (this.menu) {
      if (this.menuVisible && window.innerWidth < 1100) {
        this.menu.nativeElement.style.width = 0;
        this.menuVisible = false;
      }
      else if (window.innerWidth < 1100) {
        this.menu.nativeElement.style.width = "250px";
        this.menuVisible = true;
      }
    }
  }

  howHidePomucky(): void {
    if (this.menuPomucky && this.imgPomucky) {
      if (this.menuPomuckyVisible) {
        this.menuPomucky.nativeElement.style.display = 'none';
        this.imgPomucky.nativeElement.src = "assets/icon/svg/down.svg";
        this.menuPomuckyVisible = false;
      }
      else {
        this.menuPomucky.nativeElement.style.display = 'grid';
        this.imgPomucky.nativeElement.src = "assets/icon/svg/up.svg";
        this.menuPomuckyVisible = true;
      }
    }
  }

  showPomucky(): void {
    if (this.menuPomucky && this.imgPomucky) {
      this.menuPomucky.nativeElement.style.display = 'grid';
      this.imgPomucky.nativeElement.src = "assets/icon/svg/up.svg";
      this.menuPomuckyVisible = true;

    }
  }

  hidePomucky(): void {
    if (this.menuPomucky && this.imgPomucky) {
      this.menuPomucky.nativeElement.style.display = 'none';
      this.imgPomucky.nativeElement.src = "assets/icon/svg/down.svg";
      this.menuPomuckyVisible = false;
    }
  }

  showHideSlovnik(): void {
    if (this.menuSlovnik && this.imgSlovnik) {
      if (this.menuSlovnikVisible) {
        this.menuSlovnik.nativeElement.style.display = 'none';
        this.imgSlovnik.nativeElement.src = "assets/icon/svg/down.svg";
        this.menuSlovnikVisible = false;
      }
      else {
        this.menuSlovnik.nativeElement.style.display = 'grid';
        this.imgSlovnik.nativeElement.src = "assets/icon/svg/up.svg";
        this.menuSlovnikVisible = true;
      }
    }
  }

  showSlovnik(): void {
    if (this.menuSlovnik && this.imgSlovnik) {
      this.menuSlovnik.nativeElement.style.display = 'grid';
      this.imgSlovnik.nativeElement.src = "assets/icon/svg/up.svg";
      this.menuSlovnikVisible = true;
    }
  }

  hideSlovnik(): void {
    if (this.menuSlovnik && this.imgSlovnik) {
      this.menuSlovnik.nativeElement.style.display = 'none';
      this.imgSlovnik.nativeElement.src = "assets/icon/svg/down.svg";
      this.menuSlovnikVisible = false;
    }
  }
}
