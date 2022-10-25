import { Component, OnInit } from '@angular/core';
import { SlovnikService } from '../../service/slovnik.service';
import { Router } from '@angular/router';
import { Pomucka, Styl } from 'src/app/types';
import { PomuckyComponent } from '../pomucky/pomucky.component';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.component.html',
  styleUrls: ['./slovnik.component.css']
})

export class SlovnikComponent implements OnInit {

  styl: any;

  constructor(private SlovnikService: SlovnikService, private router: Router) { }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    this.styl = this.SlovnikService.getStylByName(nazev);
  }
  
}
