import { Component, OnInit } from '@angular/core';
import { SlovnikService } from '../../service/slovnik.service';
import { SlovnikTranslation } from './slovnik.translations';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.component.html',
  styleUrls: ['./slovnik.component.css']
})

export class SlovnikComponent implements OnInit {

  styl: any;
  title: string;

  constructor(private router: Router, private translate: TranslateService) { 
    translate.addLangs(['CZ','EN']);
    translate.setDefaultLang('CZ');
    const language = this.translate.getBrowserLang || this.translate.defaultLang
    this.title = SlovnikTranslation['title'][this.translate.langs.indexOf(language)];
  }

  switchLanguage(lang:string){
    this.translate.use(lang);
  }

  ngOnInit() {
    
  }

  ngDoCheck() {
    
  }

  public slovnikPojmy(title: string) {
    localStorage.setItem("title", title);
    this.router.navigate(["vyukovymod/vyukovymod-detail"]);
    console.log();
  }

}