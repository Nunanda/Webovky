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
  vyuka: Vyuka | void | undefined;
  InfoVyuky: InfoVyuky[] = [];
  index: number = 0;

  constructor(private vyukaService: VyukaService) {
    this.nazev = localStorage.getItem("vyukovymod");
  }

  ngOnInit(): void {
    this.loadVyukaData();
  }

  ngDoCheck(): void {
    this.loadVyukaData();
  }

  private loadVyukaData(): void {
    this.vyuka = this.vyukaService.getVyrobekByName(this.nazev);
    this.InfoVyuky = this.vyukaService.getKroky(this.nazev);
  }

  nextIndex(): void {
    this.index = (this.index + 1) % this.InfoVyuky.length;
  }

  previousIndex(): void {
    this.index = (this.index - 1 + this.InfoVyuky.length) % this.InfoVyuky.length;
  }
}
