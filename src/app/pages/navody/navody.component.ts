import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavodyService } from 'src/app/service';
import { Navod } from 'src/app/types';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  navod: Array<Navod> = new Array<Navod>;
  //NavodyService: any;
  //obtiznost!: String;

  constructor(private navodyService: NavodyService, private router: Router) { }

  ngOnInit(): void {
    this.navod = this.navodyService.getVsechnyNavody();
  }

  ngDoCheck(): void {
    this.navod = this.navodyService.getVsechnyNavody();
  }

  public getPopisy(nazev: string): void {
    localStorage.setItem("nazev", nazev);
    this.router.navigate(["navody/navody-detail/"]);
  }

  /*public lehkeNavody() {
    this.obtiznost.valueOf();
  }

  public stredniNavody() {
  }

  public tezkeNavody() {
  }*/
}
