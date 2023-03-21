import { Component, OnInit } from '@angular/core';
import { SlovnikService } from '../../service/slovnik.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.component.html',
  styleUrls: ['./slovnik.component.css']
})

export class SlovnikComponent implements OnInit {

  styl: any;

  constructor(private SlovnikService: SlovnikService, private router: Router, public translate: TranslateService) {
    translate.addLangs(['CZ','EN']);
    translate.setDefaultLang('CZ');
  }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    this.styl = this.SlovnikService.getStylByName(nazev);
  }

  ngDoCheck() {
    const nazev = (this.router.url.split('/'))[2];
    this.styl = this.SlovnikService.getStylByName(nazev);
  }
  
  public switchLanguage(lang:string) {
    return this.translate.use(lang);
  }
}
