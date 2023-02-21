import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VyukaService } from '../../service/vyuka.service';
import { VyukaEn, VyukaCz} from '../../types'

@Component({
  selector: 'app-vyukovymod',
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyukaCz: Array<VyukaCz>;
  vyukaEn: Array<VyukaEn>;

  constructor(private vyukaService: VyukaService, private router: Router) {
    this.vyukaEn = new Array<VyukaEn>;
    this.vyukaCz = new Array<VyukaCz>;
  }

  ngOnInit() {
    this.vyukaCz = this.vyukaService.getVsechnyPomuckyCz();
    this.vyukaEn = this.vyukaService.getVsechnyPomuckyEn();
  }

  public goKroky(titleCz: string) {
    localStorage.setItem("title", titleCz);
    this.router.navigate(["vyukovymod/vyukovymod-detail"]);
    console.log();
  }
  
}