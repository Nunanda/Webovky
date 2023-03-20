import { Component, OnInit } from '@angular/core';
import { VyukaService } from '../../../service/vyuka.service';
import { Router } from '@angular/router';
import { InfoVyuky, Vyuka } from '../../../types'

@Component({
  selector: 'app-vyukovymod-detail',
  templateUrl: './vyukovymod-detail.component.html',
  styleUrls: ['./vyukovymod-detail.component.css']
})
export class VyukovymodDetailComponent implements OnInit {

  nazev: any;
  vyuka: any;
  InfoVyuky: Array<InfoVyuky>;
  index: number;

  constructor(private vyukaService: VyukaService, private router: Router) {
    this.nazev = localStorage.getItem("nazev");
    this.InfoVyuky = new Array<InfoVyuky>;
    this.vyuka = new Array<Vyuka>();
    this.index = 0;
  }

  ngOnInit() {
    this.vyuka = this.vyukaService.getVyrobekByName(this.nazev);
    this.InfoVyuky = this.vyukaService.getKroky(this.nazev);
  }

  ngDoCheck() {
    this.vyuka = this.vyukaService.getVyrobekByName(this.nazev);
    this.InfoVyuky = this.vyukaService.getKroky(this.nazev);
  }

  public nextIndex() {
    if (this.index + 1 >= this.InfoVyuky.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  public previousIndex() {
    if (this.index - 1 < 0) {
      this.index = this.InfoVyuky.length - 1;
    }
    else {
      this.index--;
    }
  }

}