import { Component, OnInit } from '@angular/core';
import { NavodyService } from '../../service/navody.service';
import { Router } from '@angular/router';
import { Navod } from '../../types';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  navod: Array<Navod>;
  //NavodyService: any;
  //obtiznost!: String;

  constructor(private navodyService: NavodyService, private router: Router) {
    this.navod = new Array<Navod>;
  }

  ngOnInit() {
    this.navod = this.navodyService.getVsechnyNavody();
  }

  ngDoCheck() {
    this.navod = this.navodyService.getVsechnyNavody();
  }

  public getPopisy(nazev: string) {
    localStorage.setItem("nazev", nazev);
    this.router.navigate(["navody/navody-detail"]);
  }

  /*public lehkeNavody() {
    this.obtiznost.valueOf();
  }

  public stredniNavody() {
  }

  public tezkeNavody() {
  }*/
}
