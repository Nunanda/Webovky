import { Component, OnInit } from '@angular/core';
import { PomuckyService } from '../../service/pomucky.service';
import { Router } from '@angular/router';
import { Pomucka, PopisPomucek } from 'src/app/types';
import { YouTubePlayer } from '@angular/youtube-player';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pomucky',
  templateUrl: './pomucky.component.html',
  styleUrls: ['./pomucky.component.css']
})
export class PomuckyComponent implements OnInit {

  pomucka: Pomucka;
  kroky: Array<PopisPomucek> = [];
  sanitizer: any;


  constructor(private pomuckyService: PomuckyService, private router: Router) {
    const nazev = (this.router.url.split('/'))[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
    this.kroky = this.pomucka.kroky;
  }

  ngOnInit() {
    const nazev = (this.router.url.split('/'))[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
    this.kroky = this.pomucka.kroky;
  }

  ngDoCheck(){
    const nazev = (this.router.url.split('/'))[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
    this.kroky = this.pomucka.kroky;
  }

  getEmbedVideo(embed: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embed}?showinfo=0&loop=1&modestbranding=1`);
  }
}

