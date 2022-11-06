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

  constructor(private vyukaService: VyukaService, private router: Router) {
    if (localStorage.getItem("title") === undefined) {
      const state = history.state;
      localStorage.setItem("title", state['title']);
    }
    else {
      this.title = localStorage.getItem("title");
    }
    this.krok = new Array<Info>;
  }

  ngOnInit() {
    console.log(this.title);
    this.krok = this.vyukaService.getKroky(this.title);
  }

}
