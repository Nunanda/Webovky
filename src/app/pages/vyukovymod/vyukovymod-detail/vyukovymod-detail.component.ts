import { Component, OnInit } from '@angular/core';
import { VyukaService } from 'src/app/service';
import { InfoVyuky } from 'src/app/types';

@Component({
  selector: 'app-vyukovymod-detail',
  templateUrl: './vyukovymod-detail.component.html',
  styleUrls: ['./vyukovymod-detail.component.css']
})
export class VyukovymodDetailComponent implements OnInit {

  nazev: string;
  title: string;
  infoVyuky: InfoVyuky[] | undefined;
  index: number = 0;

  constructor(private vyukaService: VyukaService) {
    this.nazev = localStorage.getItem("vyukovymod") || "";
    this.title = this.vyukaService.getTitle(this.nazev);
  }

  ngOnInit(): void {
    this.loadVyukaData();
  }

  ngDoCheck(): void {
    this.loadVyukaData();
  }

  private loadVyukaData(): void {
    this.infoVyuky = this.vyukaService.getKroky(this.nazev);
  }

  nextIndex(): void {
    if (this.infoVyuky) {
      this.index = (this.index + 1) % this.infoVyuky.length;
    }
  }

  previousIndex(): void {
    if (this.infoVyuky) {
      this.index = (this.index - 1 + this.infoVyuky.length) % this.infoVyuky.length;
    }
  }
}
