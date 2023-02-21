import { Component, OnInit } from '@angular/core';
import { VyukaService } from '../../../service/vyuka.service';
import { Router } from '@angular/router';
import { InfoVyukyEn, InfoVyukyCz } from '../../../types'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vyukovymod-detail',
  templateUrl: './vyukovymod-detail.component.html',
  styleUrls: ['./vyukovymod-detail.component.css']
})
export class VyukovymodDetailComponent implements OnInit {

  titleEn: any;
  titleCz: any;
  InfoVyukyEn: Array<InfoVyukyEn>;
  InfoVyukyCz: Array<InfoVyukyCz>;
  index: number;

  constructor(private vyukaService: VyukaService, private router: Router, public translate: TranslateService) {
    this.titleEn = localStorage.getItem("titleEn");
    this.titleCz = localStorage.getItem("titleCz");
    this.InfoVyukyCz = new Array<InfoVyukyCz>;
    this.InfoVyukyEn = new Array<InfoVyukyEn>;
    this.index = 0;
    translate.addLangs(['CZ','EN']);
    translate.setDefaultLang('CZ');
  }
  switchLanguage(lang:string){
    this.translate.use(lang);
  }

  ngOnInit() {
    this.InfoVyukyCz = this.vyukaService.getKrokyCz(this.titleCz);
    this.InfoVyukyEn = this.vyukaService.getKrokyEn(this.titleEn);
  }

  public nextIndexEn() {
    if (this.index + 1 >= this.InfoVyukyEn.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  public previousIndexEn() {
    if (this.index - 1 < 0) {
      this.index = this.InfoVyukyEn.length - 1;
    }
    else {
      this.index--;
    }
  }

  public nextIndexCz() {
    if (this.index + 1 >= this.InfoVyukyCz.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  public previousIndexCz() {
    if (this.index - 1 < 0) {
      this.index = this.InfoVyukyCz.length - 1;
    }
    else {
      this.index--;
    }
  }

}