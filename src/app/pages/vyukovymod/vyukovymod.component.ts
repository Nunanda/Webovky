import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from 'src/app/service';
import { Vyuka } from 'src/app/types';

@Component({
  selector: 'app-vyukovymod',
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyuka: Array<Vyuka>;

  constructor(private vyukaService: VyukaService, private router: Router) {
    this.vyuka = new Array<Vyuka>;
  }

  ngOnInit() {
    this.vyuka = this.vyukaService.getVsechnyPomucky();
  }

  ngDoCheck() {
    this.vyuka = this.vyukaService.getVsechnyPomucky();
  }

  public goKroky(nazev: string) {
    localStorage.setItem("nazev", nazev);
    this.router.navigate(["vyukovymod/vyukovymod-detail"]);
  }

}