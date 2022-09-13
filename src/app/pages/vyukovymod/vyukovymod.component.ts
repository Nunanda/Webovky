import { Component, OnInit } from '@angular/core';
import { VyukaService } from '../../service/vyuka.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vyukovymod',
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyrobek: any;

  constructor(private vyukaService: VyukaService, private router: Router) { }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    this.vyrobek = this.vyukaService.getvyrobekByName(nazev);
  }

}
