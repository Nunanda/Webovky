import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from '../../service/vyuka.service';
import { Vyuka } from '../../types';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vyukovymod',
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyuka: Array<Vyuka>;

  constructor(private vyukaService: VyukaService, private router: Router, private translate: TranslateService) {
    this.vyuka = new Array<Vyuka>;
  }

  ngOnInit() {
    this.vyuka = this.vyukaService.getVsechnyPomucky();
    this.translate.get('')
  }

  public goKroky(title: string) {
    localStorage.setItem("title", title);
    this.router.navigate(["vyukovymod/vyukovymod-detail"]);
    console.log();
  }

  
  
}