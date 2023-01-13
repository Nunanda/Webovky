import { Injectable } from '@angular/core';
import { Navod, Obtiznost, Popis } from '../types';

const poleNavody: Array<Navod> = [
  { obtiznost: Obtiznost.lehky,
    nazev: "dinosaurus",
    title: "Dinosaurus",
    zkratky: "Mk, V, Ks, A, Po, Řo",
    pomucky: "Háček (velikosti 2mm), jehla, značkovač, duté vlákno, bezpečnostní očka",
    popisy: [
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: 'hlava-dinosaura',
        titulekCasti: 'Hlava',
        popis: 'Mk (6)<br> V<br> ks, V<br> 2ks, V<br> 3ks, V<br> 4ks, V <br>5ks, V <br>ks (6 řad)<br> 5ks, A<br> 4ks, A<br> 3ks, A<br> 2ks, A<br> ks, A<br> A<br> Po'
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: 'nos-dinosaura',
        titulekCasti: 'Nos',
        popis: "Mk (6)<br> V<br> ks, V<br> 2ks, V<br> 3ks, V<br> ks (3 řady)<br> 3ks, A<br> Po"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: 'telo-dinosaura',
        titulekCasti: 'Tělo',
        popis: "Mk (6)<br V<br> ks, V<br> 2ks, V<br> 3ks, V<br> 4ks, V<br> 5ks, V<br> 6ks, V<br> ks (3 řady)<br> 6ks, A<br> 5ks, A<br> 4ks, A<br> ks (3 řady)<br> 3ks, A<br> ks (1 řada)<br> 2ks, A<br> ks (1 řada)<br> Po"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: 'predni-noha-dinosaura',
        titulekCasti: 'Přední noha (2x)',
        popis: "Mk (6)<br> V<br> ks (7 řad)<br> Po"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: 'zadni-noha-dinosaura',
        titulekCasti: 'Zadní noha (2x)',
        popis: "Mk (6)<br> V<br> ks, V<br> 2ks, V<br> ks (2 řady)<br> 2ks, A<br> 4A, 10ks<br> 2A, 10ks<br> ks (8 řad)<br> A<br> Po"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: 'ocas-dinosaura',
        titulekCasti: 'Ocas',
        popis: "Mk (6)<br> V<br> 11ks, V<br> 12ks, V<br> 13ks, V<br> 14ks, V<br> 15ks, V<br> 16ks, V<br> 17ks, V<br> 18ks, V<br> 19ks, V<br> 20ks, V<br> 21ks, V<br> 22ks, V<br> 23ks, V<br> Po<br>"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: 'osten-dinosaura',
        titulekCasti: 'Osten (6x)',
        popis: "Mk (6)<br> 2ks, V<br> 3ks, V<br> 4ks, V<br> 5ks, V<br> 6ks, V<br> Po"
      }
    ]
  },
  { obtiznost: Obtiznost.stredni,
    nazev: "harold",
    title: "Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    popisy: [
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: 'hlava-harold',
        titulekCasti: 'Hlava',
        popis: 'Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> ks (6 řad)<br> 4 ks, A<br> 3 ks, A<br> 2 ks, A<br> ks, A<br> Po'
      },
      { obrazek: true,
        zkratkyCasti: "Řo, V, Po",
        nazevCasti: 'chapadla-harold',
        titulekCasti: 'Chapadla',
        popis: "6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "
      },
      { obrazek: true,
        zkratkyCasti: " ",
        nazevCasti: 'vyplneni-harold',
        titulekCasti: 'Vyplnění',
        popis: "Nezapomeňte v tomto bodě vyplnit."
      },
      { obrazek: true,
        zkratkyCasti: "A, Po",
        nazevCasti: 'uzavreni-harold',
        titulekCasti: 'Uzavření',
        popis: "A<br>Po na zakončení, necháme si delší kus příze na zapošití."
      },
      { obrazek: true,
        zkratkyCasti: " ",
        nazevCasti: 'doplnky-harold',
        titulekCasti: 'Doplňky',
        popis: "Obočí a pusinku našijeme černou přízí."
      }
    ]
  },
  { obtiznost: Obtiznost.tezky,
    nazev: "vodni-zelva",
    title: "Vodní želva",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
    popisy: [
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: 'hlava-zelva',
        titulekCasti: "Hlava",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> ks (4 řad)<br> 4 ks, A<br> 3 ks, A<br> 2 ks, A<br> ks, A<br> Po"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, A, Po",
        nazevCasti: 'horni-cast-krunyre-zelva',
        titulekCasti: "Horní část krunýře",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> 5 ks, V<br> 6ks, V<br> ks (3 řady)<br> Po"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: 'spodni-cast-krunyre-zelva',
        titulekCasti: "Spodní část krunýře",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> 5 ks, V<br> 6ks, V<br> Po"
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: 'zadni-ploutev-zelva',
        titulekCasti: "Zadní ploutev (2x)",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> Po<br> Po dokončení kolečko ohneme napůl a sešijeme k sobě."
      },
      { obrazek: true,
        zkratkyCasti: "Mk, V, Ks, Po",
        nazevCasti: 'predni-ploutev-zelva',
        titulekCasti: "Přední ploutev (2x)",
        popis: "Mk (8) <br> V<br> ks, V<br> 2 ks, V<br> 3 ks, V<br> 4 ks, V<br> 5 ks, V<br> 6ks, V<br> Po<br> Po dokončení kolečko ohneme napůl a sešijeme k sobě."
      },
      { obrazek: false,
        zkratkyCasti: "Mk, Ks, Po",
        nazevCasti: 'ocasek-zelva',
        titulekCasti: "Ocásek",
        popis: "Mk (4)<br> ks (2 řady)<br> Po"
      },
    ],
},];
    @Injectable({
      providedIn: 'root'
    })
    export class NavodyService {

      mapaNavody: Map<string, Navod>;

      constructor() {
        this.mapaNavody = new Map();
        this.initMap();
      }

      private initMap(){
        poleNavody.forEach(navod=>{
          this.mapaNavody.set(navod.nazev, navod);
        });
      }

      public getNavodyByName(name: string) {
        return poleNavody.find(element => element.title == name);
      }

      public getVsechnyNavody(): Array<Navod> {
        return poleNavody;
      }
      
      public getPopisy(title: string): Array<Popis> {
        let index = poleNavody.findIndex(x => x.title == title);
        return poleNavody[index].popisy;
      }

    }
