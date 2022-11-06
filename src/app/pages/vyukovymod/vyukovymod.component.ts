import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from '../../service/vyuka.service';
import { Vyrobek } from '../../types'

@Component({
  selector: 'app-vyukovymod',
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyrobek: Array<Vyrobek>;

  constructor(private vyukaService: VyukaService, private router: Router) {
    this.vyrobek = new Array<Vyrobek>;

  }

  ngOnInit() {
    this.vyrobek = this.vyukaService.getVsechnyPomucky();
  }

  public getKroky(title: string) {
    const state = { title };
    this.router.navigate(["kroky"], { state });
  }

}
