import { Component, OnInit } from '@angular/core';
import { PomuckyService } from '../../service/pomucky.service';
import { Router } from '@angular/router';
import { Pomucka } from 'src/app/types';

@Component({
  selector: 'app-pomucky',
  templateUrl: './pomucky.component.html',
  styleUrls: ['./pomucky.component.css']
})
export class PomuckyComponent implements OnInit {

  pomucka: any;
  

  constructor(private pomuckyService: PomuckyService, private router: Router) { }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
   
  }

}
