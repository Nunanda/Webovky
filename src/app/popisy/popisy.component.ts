import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavodyService } from '../service/navody.service';
import { Popis } from '../types';

@Component({
  selector: 'app-popisy',
  templateUrl: './popisy.component.html',
  styleUrls: ['./popisy.component.css']
})
export class PopisyComponent implements OnInit {

  title: any;
  popis: Array<Popis>;
  index: number;

  constructor(private navodyService: NavodyService, private router: Router) {
    this.title = localStorage.getItem("title");
    this.popis = new Array<Popis>;
    this.index = 0;
  }

  ngOnInit() {
    this.popis = this.navodyService.getPopisy(this.title);
  }

  public nextIndex() {
    this.index++;
  }

  public previousIndex() {
    this.index--;
  }

}
