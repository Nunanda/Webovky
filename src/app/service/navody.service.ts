import { Injectable } from '@angular/core';
import { Navod, ObtiznostNavodu, PopisNavodu } from '../types';
import { TranslateService } from '@ngx-translate/core';

const poleNavodyCZ: Array<Navod> = [
  {
    obtiznost: ObtiznostNavodu.stredni,
    nazev: "dinosaurus",
    title: "Dinosaurus",
    zkratky: "Mk, V, Ks, A, Po, Řo",
    pocet: 7,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "dinosaurus",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 4,5 mm)", "Dolphin Baby 2 klubka na tělo", "Dolphin Baby 1 na ostny", "Kousek černé příze na nozdry", "Bezpečnostní očka (velikost 10 mm)", "Značkovač", "Nůžky", "Výplň", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-dinosaura",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "ks, V", "ks (6 řad)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "nos-dinosaura",
        titulekCasti: "Nos",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "ks (3 řady)", "3ks, A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "telo-dinosaura",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", " V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "4ks, A", "ks (3 řady)", "3ks, A", "ks (1 řada)", "2ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "predni-noha-dinosaura",
        titulekCasti: "Přední noha (2x)",
        popis: ["Mk (6)", "V", "ks (7 řad)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "zadni-noha-dinosaura",
        titulekCasti: "Zadní noha (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "ks (2 řady)", "2ks, A", "4A, 10ks", "2A, 10ks", "ks (8 řad)", "A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "ocas-dinosaura",
        titulekCasti: "Ocas",
        popis: ["Mk (6)", "V", "11ks, V", "12ks, V", "13ks, V", "14ks, V", "15ks, V", "16ks, V", "17ks, V", "18ks, V", "19ks, V", "20ks, V", "21ks, V", "22ks, V", "23ks, V", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "osten-dinosaura",
        titulekCasti: "Osten (6x)",
        popis: ["Mk (6)", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "Po"]
      }
    ]
  },
  {
    obtiznost: ObtiznostNavodu.lehky,
    nazev: "harold",
    title: "Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pocet: 5,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "harold",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "Bezpečnostní očka (velikost 10 mm)", "YarnArt Jeans 1 klubko", "Kousek černé na doplňky", "Výplň", "Značkovač", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-harold",
        titulekCasti: "Hlava",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (6 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "chapadla-harold",
        titulekCasti: "Chapadla",
        popis: ["6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "]
      },
      {
        obrazek: true,
        nazevCasti: "vyplneni-harold",
        titulekCasti: "Vyplnění",
        popis: ["Nezapomeňte v tomto bodě vyplnit."]
      },
      {
        obrazek: true,
        nazevCasti: "uzavreni-harold",
        titulekCasti: "Uzavření",
        popis: ["A", "o na zakončení, necháme si delší kus příze na zapošití."]
      },
      {
        obrazek: true,
        nazevCasti: "doplnky-harold",
        titulekCasti: "Doplňky",
        popis: ["Obočí a pusinku našijeme černou přízí."]
      }
    ]
  },
  {
    obtiznost: ObtiznostNavodu.stredni,
    nazev: "vodni-zelva",
    title: "Vodní želva",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pocet: 6,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "vodni-zelva",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 1 klubíčko na tělo", "YarnArt Jeans 1 klubíčko na krunýř", "Kousek černé a růžové na doplňky", "Bezpečnostní očka (10 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-zelva",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (4 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "horni-cast-krunyre-zelva",
        titulekCasti: "Horní část krunýře",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "ks (3 řady)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "spodni-cast-krunyre-zelva",
        titulekCasti: "Spodní část krunýře",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "zadni-ploutev-zelva",
        titulekCasti: "Zadní ploutev (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: true,
        nazevCasti: "predni-ploutev-zelva",
        titulekCasti: "Přední ploutev (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: false, //false, ale obrázek se zobrazuje
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Ocásek",
        popis: ["Mk (4)", "ks (2 řady)", "Po"]
      },/*
      {
        obrazek: false, //dodat fotku doplnky
        nazevCasti: "doplnky-zelva",
        titulekCasti: "Doplňky",
        popis: ["Jednu řadu pod očima můžu vytvořit tváře. Jednoduše si vyberu jeden bod, do kterého píchnu a jehlu vytáhnu o 2 očka dál. Zakončím zapošitím", "Pusinku z kousku černé. Vyberu si místa, kde chci mít koutky. Těmito dvěma body jehlu protáhnu dvakrát, abych měla venku volný oblouček nitě. Tu potom zachytím zhruba uprostřed, a tak upevním"]
      },*/
    ],
  },/*
  {
    obtiznost: ObtiznostNavodu.lehky,
    nazev: "obraceci-chobotnicka",
    title: "Obracecí chobotnička",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    pocet: 0,
    popisy: [
      {
        obrazek: false,
        nazevCasti: "hlava-obraceci-chobotnicka",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 2 klubíčka (každé jiné barvy)", "YarnArt Jeans černá na oči a doplňky", "Značkovač", "Nůžky", "Jehla"]
      },
      {
        obrazek: false,
        nazevCasti: "hlava-obraceci-chobotnicka",
        titulekCasti: "Hlava (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (9 řad)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "chapadlo-obraceci-chobotnicka",
        titulekCasti: "Chapadlo (16x)",
        popis: ["6Řo", "Obracím směr 4PDS, 5PDS do jednoho oka, 4PDS", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "stastna-obraceci-chobotnicka",
        titulekCasti: "Šťastné oko (2x)",
        popis: ["Mk (6)", "V", "ks, V", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "nastvana-obraceci-chobotnicka",
        titulekCasti: "Naštvané oči (2x)",
        popis: ["Mk (6)", "Musím si to znova zkusit :-)"]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.tezky,
    nazev: "pavouk",
    title: "Pavouk",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    pocet: 0,
    popisy: [
      {
        obrazek: false,
        nazevCasti: "pavouk",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 1 klubíčko", "Jakákoliv tenká příze s chlupem", "Kousek černé na pusu", "Bezpečnostní očka (velikost 10 mm a 8 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: false,
        nazevCasti: "hlava-pavouk",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "ks (2 řady)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "telo-pavouk",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "ks (1 řada)", "4ks, A", "3ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "prvni-noha-pavouk",
        titulekCasti: "První noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "druha-noha-pavouk",
        titulekCasti: "Druhá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (3 řady)", "3Po, ks, 3PDS, ks", "ks (3 řady)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "treti-noha-pavouk",
        titulekCasti: "Třetí noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "3Po, ks, 3PDS, ks", "ks (4 řady)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "ctvrta-noha-pavouk",
        titulekCasti: "Čtvrtá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (5 řad)", "3Po, ks, 3PDS, ks", "ks (5 řad)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "zub-pavouk",
        titulekCasti: "Zub (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (2 řady)"]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.tezky,
    nazev: "sova",
    title: "Sova",
    zkratky: "Mk, Ks, Řo, Po, PDS, DS, V, A",
    pocet: 0,
    popisy: [
      {
        obrazek: false,
        nazevCasti: "sova",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 2 klubíčka (každé jiné barvy)", "Kousek černé na doplňky", "Bezpečnostní očka (velikost 10 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: false,
        nazevCasti: "hlava-sova",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "6ks, V", "ks (4 řady)", "6ks, A", "5ks, A", "4ks, A", "3ks, A", "12ks, Řo", "Otočíme směr háčkování, 12ks, Řo", "Otoč, V, 10ks, V, Řo", "Otoč, V, 12ks, V, Řo", "Otoč, V, 14ks, V, Řo", "Otoč, 18ks, Řo", "Otoč, 18ks, Řo", "Otoč, 18ks, Řo", "Otoč, 18ks, Řo", "Otoč, A, 14ks, A, Řo", "Otoč, A, 12ks, A, Řo", "Otoč, 2A, 4ks, 2A, Řo", "Otoč, PDS za vnější nit kolem dokola", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "telo-sova",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "DS (4 řady)", "3ks, A", "DS (1 řada)", "ks (1 řada)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "oci-sova",
        titulekCasti: "Oko (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "ks (1 řada jinou barvou)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "kridla-sova",
        titulekCasti: "Křídlo (2x)",
        popis: ["Mk (6)", "ks (1 řada)", "V, 5ks", "V, 5ks, V", "V, 7ks, V", "V, 9ks, V", "V, 11ks, V", "V, 13ks, V", "V, 15ks, V", "ks (2 řady)", "A, 15ks, A", "A, 13ks, A", "A, 11ks, A", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "zobak-sova",
        titulekCasti: "Zobák",
        popis: ["Mk (6)", "2ks, V", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "nohy-sova",
        titulekCasti: "Noha (2x)",
        popis: ["Mk (6)", "V", "(DS, PDS, DS) do jednoho oka 3krát, 9Po"]
      },
    ],
  },*/
];

const poleNavodyEN: Array<Navod> = [
  {
    obtiznost: ObtiznostNavodu.stredni,
    nazev: "dinosaurus",
    title: "EN Dinosaurus",
    zkratky: "Mk, V, Ks, A, Po, Řo",
    pocet: 7,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "dinosaurus",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 4,5 mm)", "Dolphin Baby 2 klubka na tělo", "Dolphin Baby 1 na ostny", "Kousek černé příze na nozdry", "Bezpečnostní očka (velikost 10 mm)", "Značkovač", "Nůžky", "Výplň", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-dinosaura",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "ks, V", "ks (6 řad)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "nos-dinosaura",
        titulekCasti: "Nos",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "ks (3 řady)", "3ks, A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "telo-dinosaura",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", " V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "4ks, A", "ks (3 řady)", "3ks, A", "ks (1 řada)", "2ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "predni-noha-dinosaura",
        titulekCasti: "Přední noha (2x)",
        popis: ["Mk (6)", "V", "ks (7 řad)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "zadni-noha-dinosaura",
        titulekCasti: "Zadní noha (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "ks (2 řady)", "2ks, A", "4A, 10ks", "2A, 10ks", "ks (8 řad)", "A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "ocas-dinosaura",
        titulekCasti: "Ocas",
        popis: ["Mk (6)", "V", "11ks, V", "12ks, V", "13ks, V", "14ks, V", "15ks, V", "16ks, V", "17ks, V", "18ks, V", "19ks, V", "20ks, V", "21ks, V", "22ks, V", "23ks, V", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "osten-dinosaura",
        titulekCasti: "Osten (6x)",
        popis: ["Mk (6)", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "Po"]
      }
    ]
  },
  {
    obtiznost: ObtiznostNavodu.lehky,
    nazev: "harold",
    title: "EN Harold",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pocet: 5,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "harold",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "Bezpečnostní očka (velikost 10 mm)", "YarnArt Jeans 1 klubko", "Kousek černé na doplňky", "Výplň", "Značkovač", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-harold",
        titulekCasti: "Hlava",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (6 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "chapadla-harold",
        titulekCasti: "Chapadla",
        popis: ["6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "]
      },
      {
        obrazek: true,
        nazevCasti: "vyplneni-harold",
        titulekCasti: "Vyplnění",
        popis: ["Nezapomeňte v tomto bodě vyplnit."]
      },
      {
        obrazek: true,
        nazevCasti: "uzavreni-harold",
        titulekCasti: "Uzavření",
        popis: ["A", "o na zakončení, necháme si delší kus příze na zapošití."]
      },
      {
        obrazek: true,
        nazevCasti: "doplnky-harold",
        titulekCasti: "Doplňky",
        popis: ["Obočí a pusinku našijeme černou přízí."]
      }
    ]
  },
  {
    obtiznost: ObtiznostNavodu.stredni,
    nazev: "vodni-zelva",
    title: "EN Vodní želva",
    zkratky: "Mk, Ks, Řo, Po, V, A",
    pocet: 6,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "vodni-zelva",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 1 klubíčko na tělo", "YarnArt Jeans 1 klubíčko na krunýř", "Kousek černé a růžové na doplňky", "Bezpečnostní očka (10 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-zelva",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (4 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "horni-cast-krunyre-zelva",
        titulekCasti: "Horní část krunýře",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "ks (3 řady)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "spodni-cast-krunyre-zelva",
        titulekCasti: "Spodní část krunýře",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "zadni-ploutev-zelva",
        titulekCasti: "Zadní ploutev (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: true,
        nazevCasti: "predni-ploutev-zelva",
        titulekCasti: "Přední ploutev (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
      },
      {
        obrazek: false, //false, ale obrázek se zobrazuje
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Ocásek",
        popis: ["Mk (4)", "ks (2 řady)", "Po"]
      },/*
      {
        obrazek: false, //dodat fotku doplnky
        nazevCasti: "doplnky-zelva",
        titulekCasti: "Doplňky",
        popis: ["Jednu řadu pod očima můžu vytvořit tváře. Jednoduše si vyberu jeden bod, do kterého píchnu a jehlu vytáhnu o 2 očka dál. Zakončím zapošitím", "Pusinku z kousku černé. Vyberu si místa, kde chci mít koutky. Těmito dvěma body jehlu protáhnu dvakrát, abych měla venku volný oblouček nitě. Tu potom zachytím zhruba uprostřed, a tak upevním"]
      },*/
    ],
  },/*
  {
    obtiznost: ObtiznostNavodu.lehky,
    nazev: "obraceci-chobotnicka",
    title: "Obracecí chobotnička",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    pocet: 0,
    popisy: [
      {
        obrazek: false,
        nazevCasti: "hlava-obraceci-chobotnicka",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 2 klubíčka (každé jiné barvy)", "YarnArt Jeans černá na oči a doplňky", "Značkovač", "Nůžky", "Jehla"]
      },
      {
        obrazek: false,
        nazevCasti: "hlava-obraceci-chobotnicka",
        titulekCasti: "Hlava (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (9 řad)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "chapadlo-obraceci-chobotnicka",
        titulekCasti: "Chapadlo (16x)",
        popis: ["6Řo", "Obracím směr 4PDS, 5PDS do jednoho oka, 4PDS", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "stastna-obraceci-chobotnicka",
        titulekCasti: "Šťastné oko (2x)",
        popis: ["Mk (6)", "V", "ks, V", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "nastvana-obraceci-chobotnicka",
        titulekCasti: "Naštvané oči (2x)",
        popis: ["Mk (6)", "Musím si to znova zkusit :-)"]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.tezky,
    nazev: "pavouk",
    title: "Pavouk",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    pocet: 0,
    popisy: [
      {
        obrazek: false,
        nazevCasti: "pavouk",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 1 klubíčko", "Jakákoliv tenká příze s chlupem", "Kousek černé na pusu", "Bezpečnostní očka (velikost 10 mm a 8 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: false,
        nazevCasti: "hlava-pavouk",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "ks (2 řady)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "telo-pavouk",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "ks (1 řada)", "4ks, A", "3ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "prvni-noha-pavouk",
        titulekCasti: "První noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "druha-noha-pavouk",
        titulekCasti: "Druhá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (3 řady)", "3Po, ks, 3PDS, ks", "ks (3 řady)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "treti-noha-pavouk",
        titulekCasti: "Třetí noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "3Po, ks, 3PDS, ks", "ks (4 řady)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "ctvrta-noha-pavouk",
        titulekCasti: "Čtvrtá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (5 řad)", "3Po, ks, 3PDS, ks", "ks (5 řad)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "zub-pavouk",
        titulekCasti: "Zub (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (2 řady)"]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.tezky,
    nazev: "sova",
    title: "Sova",
    zkratky: "Mk, Ks, Řo, Po, PDS, DS, V, A",
    pocet: 0,
    popisy: [
      {
        obrazek: false,
        nazevCasti: "sova",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 2 klubíčka (každé jiné barvy)", "Kousek černé na doplňky", "Bezpečnostní očka (velikost 10 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: false,
        nazevCasti: "hlava-sova",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "6ks, V", "ks (4 řady)", "6ks, A", "5ks, A", "4ks, A", "3ks, A", "12ks, Řo", "Otočíme směr háčkování, 12ks, Řo", "Otoč, V, 10ks, V, Řo", "Otoč, V, 12ks, V, Řo", "Otoč, V, 14ks, V, Řo", "Otoč, 18ks, Řo", "Otoč, 18ks, Řo", "Otoč, 18ks, Řo", "Otoč, 18ks, Řo", "Otoč, A, 14ks, A, Řo", "Otoč, A, 12ks, A, Řo", "Otoč, 2A, 4ks, 2A, Řo", "Otoč, PDS za vnější nit kolem dokola", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "telo-sova",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "DS (4 řady)", "3ks, A", "DS (1 řada)", "ks (1 řada)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "oci-sova",
        titulekCasti: "Oko (2x)",
        popis: ["Mk (6)", "V", "ks, V", "2ks, V", "ks (1 řada jinou barvou)", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "kridla-sova",
        titulekCasti: "Křídlo (2x)",
        popis: ["Mk (6)", "ks (1 řada)", "V, 5ks", "V, 5ks, V", "V, 7ks, V", "V, 9ks, V", "V, 11ks, V", "V, 13ks, V", "V, 15ks, V", "ks (2 řady)", "A, 15ks, A", "A, 13ks, A", "A, 11ks, A", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "zobak-sova",
        titulekCasti: "Zobák",
        popis: ["Mk (6)", "2ks, V", "Po"]
      },
      {
        obrazek: false,
        nazevCasti: "nohy-sova",
        titulekCasti: "Noha (2x)",
        popis: ["Mk (6)", "V", "(DS, PDS, DS) do jednoho oka 3krát, 9Po"]
      },
    ],
  },*/
];

@Injectable({
  providedIn: 'root'
})
export class NavodyService {

  constructor(private translate: TranslateService) {
  }

  public getNavodyByName(name: string) {
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

}