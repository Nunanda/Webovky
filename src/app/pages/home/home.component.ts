import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en','cs']);
    translate.setDefaultLang('cs');
  }

  ngOnInit(): void {

  }

  switchLanguage(lang:string){
    this.translate.use(lang);
  }

}