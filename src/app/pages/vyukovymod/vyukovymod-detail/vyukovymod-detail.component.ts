import { Component, OnInit } from '@angular/core';
import { VyukaService } from '../../../service/vyuka.service';
import { Router } from '@angular/router';
import { InfoVyuky } from '../../../types'

@Component({
  selector: 'app-vyukovymod-detail',
  templateUrl: './vyukovymod-detail.component.html',
  styleUrls: ['./vyukovymod-detail.component.css']
})
export class VyukovymodDetailComponent implements OnInit {

  title: any;
  InfoVyuky: Array<InfoVyuky>;
  index: number;

  constructor(private vyukaService: VyukaService, private router: Router) {
    this.title = localStorage.getItem("title");
    this.InfoVyuky = new Array<InfoVyuky>;
    this.index = 0;
  }

  ngOnInit() {
    this.InfoVyuky = this.vyukaService.getKroky(this.title);
  }

  public nextIndex() {
    if (this.index + 1 >= this.InfoVyuky.length) {
      this.index = 0;
    }
    else {
      this.index++;
    }
  }

  public previousIndex() {
    if (this.index - 1 < 0) {
      this.index = this.InfoVyuky.length - 1;
    }
    else {
      this.index--;
    }
  }

}