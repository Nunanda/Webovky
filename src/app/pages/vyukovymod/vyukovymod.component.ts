import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from 'src/app/service';
import { Vyuka } from 'src/app/types';

@Component({
  selector: 'app-vyukovymod',
  standalone: false,
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyuka: Vyuka[] | undefined;

  constructor(private vyukaService: VyukaService, private router: Router) { }

  ngOnInit(): void {
    this.loadVyuka();
  }

  ngDoCheck(): void {
    this.loadVyuka();
  }

  goKroky(nazev: string): void {
    this.router.navigate(["vyukovymod/vyukovymod-detail/" + nazev]);
  }

  loadVyuka(): void {
    this.vyuka = this.vyukaService.getVsechnyVyrobky();
  }
}
