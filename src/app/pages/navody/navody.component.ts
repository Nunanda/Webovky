import { Component, OnInit } from '@angular/core';
import { NavodyService } from '../../service/navody.service';
import { Router } from '@angular/router';
import { Navod } from 'src/app/types';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  navod: Array<Navod>;

  constructor(private navodyService: NavodyService, private router: Router) {
    this.navod = new Array<Navod>;
  }

  ngOnInit() {
    this.navod = this.navodyService.getVsechnyNavody();
  }

  public getPopisy(title: string) {
    localStorage.setItem("title", title);
    this.router.navigate(["navody/navody-detail"]);
  }

}