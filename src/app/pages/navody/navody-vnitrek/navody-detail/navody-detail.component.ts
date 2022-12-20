import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavodyService } from '../../../../service/navody.service';
import { Popis } from '../../../../types';
import { NavodyComponent } from '../../navody.component';

@Component({
  selector: 'app-navody-detail',
  templateUrl: './navody-detail.component.html',
  styleUrls: ['./navody-detail.component.css']
})
export class NavodyDetailComponent implements OnInit {

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
    if (this.index+1 > this.popis.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  public previousIndex() {
    if (this.index-1 < 0) {
      this.index = 0;
    }
    else {
      this.index--;
    }
  }

}
