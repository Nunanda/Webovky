import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavodyService } from '../../../service/navody.service';
import { Navod, Popis } from '../../../types';

@Component({
  selector: 'app-navody-detail',
  templateUrl: './navody-detail.component.html',
  styleUrls: ['./navody-detail.component.css']
})
export class NavodyDetailComponent implements OnInit {

  title: any;
  popis: Array<Popis>;
  navod: any;
  index: number;
  intervalId: any;
  timer: any = 0;

  constructor(private navodyService: NavodyService, private router: Router) {
    this.title = localStorage.getItem("title");
    this.popis = new Array<Popis>;
    this.navod = new Array<Navod>;
    this.index = 0;
  }

  ngOnInit() {
    this.navod = this.navodyService.getNavodyByName(this.title);
    this.popis = this.navodyService.getPopisy(this.title);
  }

  public setindex(item: Popis) {
    this.index = this.popis.indexOf(item);
  }

  get minutes() {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds() {
    return ("00" + this.timer % 60).slice(-2);
  }

  public time() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
    else if (!this.intervalId) {
      this.intervalId = setInterval(() => this.timer++, 1000);
    }
  }


}
