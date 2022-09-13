import { Component, OnInit } from '@angular/core';
import { NavodyService } from '../../service/navody.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navody',
  templateUrl: './navody.component.html',
  styleUrls: ['./navody.component.css']
})
export class NavodyComponent implements OnInit {

  navod: any;

  constructor(private navodyService: NavodyService, private router: Router) { }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    this.navod = this.navodyService.getNavodByName(nazev);
  }

}
