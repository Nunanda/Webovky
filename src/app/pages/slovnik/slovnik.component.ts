import { Component, OnInit } from '@angular/core';
import { SlovnikService } from 'src/app/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.component.html',
  styleUrls: ['./slovnik.component.css']
})

export class SlovnikComponent implements OnInit {

  styl: any;

  constructor(private SlovnikService: SlovnikService, private router: Router) { }

  ngOnInit(): void {
    const nazev = (this.router.url.split('/'))[2];
    this.styl = this.SlovnikService.getStylByName(nazev);
  }

  ngDoCheck(): void {
    const nazev = (this.router.url.split('/'))[2];
    this.styl = this.SlovnikService.getStylByName(nazev);
  }
}
