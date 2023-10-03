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

  styl: Styl | undefined | void;

  constructor(private slovnikService: SlovnikService, private router: Router) { }

  ngOnInit(): void {
    this.updateStyl();
  }

  ngDoCheck(): void {
    this.updateStyl();
  }

  updateStyl(): void {
    const nazev = this.extractNazevFromUrl();
    this.styl = this.slovnikService.getStylByName(nazev);
  }

  extractNazevFromUrl(): string {
    const urlSegments = this.router.url.split('/');
    return urlSegments[2];
  }
}
