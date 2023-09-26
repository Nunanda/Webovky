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
  items: string[] = [];
  search: string | undefined;
  imageURL: string = "assets/icon/svg/account.svg";
  slovnik: Styl[] | undefined;
  pomucky: Pomucka[] | undefined;

  constructor(private vyukaService: VyukaService, private slovnikService: SlovnikService, private pomuckyService: PomuckyService, private instructionService: InstructionService, private router: Router, public translate: TranslateService) {
    this.loadResources();
    this.initializeLanguage();
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
        this.menu.nativeElement.style.display = 'none';
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
    const defaultLanguage = selectedLanguage === "EN" ? 'EN' : 'CZ';
    this.translate.currentLang = defaultLanguage;
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
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
      localStorage.setItem("nazev", this.vyukaService.getVsechnyVyrobky().find(item0 => item0.title == item)?.nazev!);
      this.router.navigate(["vyukovymod/vyukovymod-detail/"]);
    }
    else if (this.instructionService.getAllTitles().includes(item)) {
      localStorage.setItem("nazev", this.instructionService.getAllInstructions().find(item0 => item0.titleCz == item)?.titleCz!);
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
    if (this.menu && this.imgPomucky && this.imgSlovnik) {
      if (this.menuVisible && window.innerWidth < 1100) {
        this.menu.nativeElement.style.display = 'none';
        this.menuVisible = false;
      }
      else if (window.innerWidth < 1100) {
        this.menu.nativeElement.style.display = 'block';
        this.menuVisible = true;
      }
    }
  }

  showHidePomucky(): void {
    if (this.menuPomucky && this.imgPomucky) {
      if (this.menuPomuckyVisible) {
        this.menuPomucky.nativeElement.style.display = 'none';
        this.imgPomucky.nativeElement.src = "assets/icon/svg/down.svg";
        this.menuPomuckyVisible = false;
      }
      else {
        this.menuPomucky.nativeElement.style.display = 'block';
        this.imgPomucky.nativeElement.src = "assets/icon/svg/up.svg";
        this.menuPomuckyVisible = true;
      }
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
        this.menuSlovnik.nativeElement.style.display = 'block';
        this.imgSlovnik.nativeElement.src = "assets/icon/svg/up.svg";
        this.menuSlovnikVisible = true;
      }
    }
  }
}
