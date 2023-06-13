import { Injectable } from '@angular/core';
import { Navod, PopisNavodu } from 'src/app/types';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

const poleNavodyCZ: Array<Navod> = [
];

const poleNavodyEN: Array<Navod> = [
];

@Injectable({
  providedIn: 'root'
})
export class NavodyService {
  private socket$!: WebSocketSubject<any>;

  constructor(private translate: TranslateService) {
  }

  public connect(): void {
    this.socket$ = webSocket('ws://localhost:3000');
  }

  public sendMessage(message: string): void {
    this.socket$.next(message);
  }

  public receiveMessage(): Observable<string> {
    return this.socket$.asObservable();
  }

  public disconnect(): void {
    this.socket$.complete();
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
