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
  index0: number;
  popisy: Array<string>;
  intervalId: any;
  timer: any = 0;
  element: NodeListOf<HTMLElement> | null;
  element0: NodeListOf<HTMLElement> | null;

  constructor(private navodyService: NavodyService, private router: Router) {
    this.title = localStorage.getItem("title");
    this.popis = new Array<Popis>;
    this.navod = new Array<Navod>;
    this.index = 0;
    this.index0 = 0;
    this.popisy = new Array<string>;
    this.element = document.getElementsByName("button0");
    this.element0 = document.getElementsByName("element0");
  }

  ngOnInit() {
    this.navod = this.navodyService.getNavodyByName(this.title);
    this.popis = this.navodyService.getPopisy(this.title);
    this.popisy = this.popis[this.index].popis;
    this.element = document.getElementsByName("button0");
    this.element0 = document.getElementsByName("element0");
  }

  public setindex(item: Popis) {
    this.index = this.popis.indexOf(item);
    this.popisy = this.popis[this.index].popis;
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

  public finished() {
    if (this.element?.item(this.index).className === "finished") {
      this.element?.item(this.index).classList.remove("finished");
      this.element?.item(this.index).classList.add("unfinished");
    }
    else {
      this.element?.item(this.index).classList.remove("unfinished");
      this.element?.item(this.index).classList.add("finished");
    }
  }

  public previousIndex() {
    if (this.index0-1 >= 0) {
      if ((this.element0?.item(this.index0-1).getAttribute("style") != null)) {
        this.element0?.item(this.index0-1).removeAttribute("style");
        this.index0--;
      }
    }
  }

  public nextIndex() {
    if (this.index0 < this.popisy.length) {
      if ((this.element0?.item(this.index0).getAttribute("style") == null)) {
        this.element0?.item(this.index0).setAttribute("style","text-decoration: line-through; color: gray");
        this.index0++;
      }
    }
  }

}