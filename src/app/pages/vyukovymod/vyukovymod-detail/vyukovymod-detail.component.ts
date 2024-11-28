import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from 'src/app/service';
import { InfoVyuky } from 'src/app/types';

@Component({
  selector: 'app-vyukovymod-detail',
  standalone: false,
  templateUrl: './vyukovymod-detail.component.html',
  styleUrls: ['./vyukovymod-detail.component.css']
})
export class VyukovymodDetailComponent implements OnInit {

  nazev: string | undefined;
  title: string | undefined;
  infoVyuky: InfoVyuky[] | undefined;
  index: number = 0;

  constructor(private vyukaService: VyukaService, private router: Router) { }

  ngOnInit(): void {
    this.loadVyukaData();
  }

  ngDoCheck(): void {
    this.loadVyukaData();
  }

  private loadVyukaData(): void {
    this.nazev = this.router.url.split('/')[3];
    this.title = this.vyukaService.getTitle(this.nazev);
    this.infoVyuky = this.vyukaService.getKroky(this.nazev);
  }

  changeIndex(isNext: boolean): void {
    if (this.infoVyuky) {
      if (isNext) {
        this.index = (this.index + 1) % this.infoVyuky.length;
      } else {
        this.index = (this.index - 1 + this.infoVyuky.length) % this.infoVyuky.length;
      }
    }
  }
}
