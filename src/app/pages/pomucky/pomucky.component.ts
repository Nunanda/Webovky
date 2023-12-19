import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PomuckyService } from 'src/app/service';
import { Pomucka, PopisPomucek } from 'src/app/types';

@Component({
  selector: 'app-pomucky',
  templateUrl: './pomucky.component.html',
  styleUrls: ['./pomucky.component.css']
})
export class PomuckyComponent implements OnInit {

  nazev: string | undefined;
  pomucka: Pomucka | undefined;
  kroky: PopisPomucek[] | undefined;

  constructor(private pomuckyService: PomuckyService, private router: Router) { }

  ngOnInit(): void {
    this.initializePomucka();
  }

  ngDoCheck(): void {
    this.initializePomucka();
  }

  private initializePomucka(): void {
    this.nazev = this.router.url.split('/')[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(this.nazev);
    this.kroky = this.pomucka?.kroky;
  }
}
