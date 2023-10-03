import { Component, OnInit } from '@angular/core';
import { SlovnikService } from 'src/app/service';
import { Router } from '@angular/router';
import { Styl } from 'src/app/types';

@Component({
  selector: 'app-slovnik',
  templateUrl: './slovnik.component.html',
  styleUrls: ['./slovnik.component.css']
})
export class SlovnikComponent implements OnInit {

  nazev: string | undefined;
  styl: Styl | undefined | void;

  constructor(private slovnikService: SlovnikService, private router: Router) { }

  ngOnInit(): void {
    this.updateStyl();
  }

  ngDoCheck(): void {
    this.updateStyl();
  }

  updateStyl(): void {
    this.nazev = this.router.url.split('/')[2];
    this.styl = this.slovnikService.getStylByName(this.nazev);
  }
}
