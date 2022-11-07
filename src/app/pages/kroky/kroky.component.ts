import { Component, OnInit } from '@angular/core';
import { VyukaService } from '../../service/vyuka.service';
import {  Router } from '@angular/router';
import {  Info } from '../../types'

@Component({
  selector: 'app-kroky',
  templateUrl: './kroky.component.html',
  styleUrls: ['./kroky.component.css']
})
export class KrokyComponent implements OnInit {

  title: any;
  krok: Array<Info>;
  index: number;

  constructor(private vyukaService: VyukaService, private router: Router) {
    this.title = localStorage.getItem("title");
    this.krok = new Array<Info>;
    this.index = 0;
  }

  ngOnInit() {
    this.krok = this.vyukaService.getKroky(this.title);
  }

  public nextIndex() {
    this.index++;
  }

  public previousIndex() {
    this.index--;
  }

}
