import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService, InstructionService, PomuckyService, SlovnikService, TokenService } from 'src/app/service';
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
  menuVisible: boolean = false;
  items: string[] = new Array<string>();
  search: string | undefined;
  imageURL: string = "assets/icon/svg/account.svg";
  slovnik: Styl[] | undefined;
  pomucky: Pomucka[] | undefined;

  constructor(private vyukaService: VyukaService, private slovnikService: SlovnikService, private pomuckyService: PomuckyService, private instructionService: InstructionService, private router: Router, public translate: TranslateService) {
    this.loadResources();
    this.initializeLanguage();
  }

  ngOnInit(): void {
    this.loadResources();
  }

  ngDoCheck(): void {
    this.loadResources();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth > 1100) {
      this.menuVisible = true;
      if (this.menu && this.menu.nativeElement) {
        this.menu.nativeElement.style.display = 'flex';
      }
    } else {
      this.menuVisible = false;
      if (this.menu && this.menu.nativeElement) {
        this.menu.nativeElement.style.display = 'none';
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
    if (this.menu && this.menu.nativeElement) {
      if (this.menuVisible) {
        this.menu.nativeElement.style.display = 'none';
      }
      else {
        this.menu.nativeElement.style.display = 'block';
      }
      this.menuVisible = !this.menuVisible;
    }
  }

  showHidePomucky(): void {
  }

  showHideSlovnik(): void {
  }
}
