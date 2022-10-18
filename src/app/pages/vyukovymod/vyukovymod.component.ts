import { Component, OnInit } from '@angular/core';
import { VyukaService } from '../../service/vyuka.service';
import { Router } from '@angular/router';
import { Vyrobek } from 'src/app/types';

@Component({
  selector: 'app-vyukovymod',
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyrobek: Array<Vyrobek> = this.vyukaService.getvyrobek();
  bunka: any;

  constructor(private vyukaService: VyukaService, private router: Router) { }

  ngOnInit() {
    for(let i = 0; i <= this.vyrobek.length; i++) {
      this.bunka = "<div class='bunka'><div class='ruzovy_okraj'><title class='Název_návodu'>"+this.vyrobek[i].nazev+"</title></div><div id='obsah'><img id='obrázek_návodu' src='../assets/icon/"+this.vyrobek[i].nazev+".png'><table><tr><td><strong>Čas:</strong>60 minut</td></tr><tr><td><strong>Počet kroků:</strong>"+this.vyrobek[i].kroky+"</td></tr><tr><td><strong>Popis:</strong>"+this.vyrobek[i].popis+"</td></tr></table></div></div>";
      
    }
  }

}
