import { Injectable } from '@angular/core';
import { Navod, PopisNavodu } from 'src/app/types';
import { TranslateService } from '@ngx-translate/core';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

const poleNavodyCZ: Array<Navod> = [
];

const poleNavodyEN: Array<Navod> = [
];

@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  private socket!: Socket;

  constructor(private translate: TranslateService) {
  }

  public load(): Promise<void> {
    this.socket = io(environment.socketUrl, {
      extraHeaders: {
        'Access-Control-Allow-Origin': 'https://selecro.freemyip.com',
      },
    });
    return new Promise((resolve, _reject) => {
      this.socket.on('message', (message) => {
        poleNavodyCZ.push(message);
        console.log(message);
      });
      resolve();
    });
  }

  public destroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  public getNavodyByName(name: string): Navod |void {
    if (this.translate.currentLang === "EN") {
      return poleNavodyEN.find(element => element.nazev == name);
    }
    else {
      return poleNavodyCZ.find(element => element.nazev == name);
    }
  }

  public getVsechnyNavody(): Array<Navod> {
    if (this.translate.currentLang === "EN") {
      return poleNavodyEN;
    }
    else {
      return poleNavodyCZ;
    }
  }

  public getPopisy(nazev: string): Array<PopisNavodu> {
    if (this.translate.currentLang === "EN") {
      let index = poleNavodyEN.findIndex(x => x.nazev == nazev);
      return poleNavodyEN[index].popisy;
    }
    else {
      const index = poleNavodyCZ.findIndex(x => x.nazev == nazev);
      return poleNavodyCZ[index].popisy;
    }
  }

  public getTitles(): Array<string> {
    if (this.translate.currentLang === "EN") {
      return poleNavodyEN.map((item) => item.title);
    }
    else {
      return poleNavodyCZ.map((item) => item.title);
    }
  }

}
