import { Component, OnInit } from '@angular/core';
import { VyukaService } from 'src/app/service';
import { InfoVyuky, Vyuka } from 'src/app/types';

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

  constructor(private vyukaService: VyukaService) {
    this.nazev = localStorage.getItem("nazev");
    this.InfoVyuky = new Array<InfoVyuky>;
    this.vyuka = new Array<Vyuka>();
    this.index = 0;
  }

  ngOnInit(): void {
    this.vyuka = this.vyukaService.getVyrobekByName(this.nazev);
    this.InfoVyuky = this.vyukaService.getKroky(this.nazev);
  }

  ngDoCheck(): void {
    this.vyuka = this.vyukaService.getVyrobekByName(this.nazev);
    this.InfoVyuky = this.vyukaService.getKroky(this.nazev);
  }

  nextIndex(): void {
    if (this.index + 1 >= this.InfoVyuky.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  previousIndex(): void {
    if (this.index - 1 < 0) {
      this.index = this.InfoVyuky.length - 1;
    }
    else {
      this.index--;
    }
  }
}
