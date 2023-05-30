import { Injectable } from '@angular/core';
import { Navod, ObtiznostNavodu, PopisNavodu } from 'src/app/types';
import { TranslateService } from '@ngx-translate/core';

const poleNavodyCZ: Array<Navod> = [
  /*{
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
  },*/
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
        obrazek: true,
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Ocásek",
        popis: ["Mk (4)", "ks (2 řady)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "doplnky-zelva",
        titulekCasti: "Doplňky",
        popis: ["Jednu řadu pod očima můžu vytvořit tváře. Jednoduše si vyberu jeden bod, do kterého píchnu a jehlu vytáhnu o 2 očka dál. Zakončím zapošitím", "Pusinku z kousku černé. Vyberu si místa, kde chci mít koutky. Těmito dvěma body jehlu protáhnu dvakrát, abych měla venku volný oblouček nitě. Tu potom zachytím zhruba uprostřed, a tak upevním"]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.lehky,
    nazev: "obraceci-chobotnicka",
    title: "Obracecí chobotnička",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    pocet: 8,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "obraceci-chobotnicka",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 2 klubíčka (každé jiné barvy)", "YarnArt Jeans černá na oči a doplňky", "Značkovač", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-obraceci-chobotnicka",
        titulekCasti: "Hlava (2x)",
        popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "ks (9 řad)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "sesiti-hlava-obraceci-chobotnicka",
        titulekCasti: "Sešití hlav",
        popis: ["Jednu hlavu obrátím vzhůru nohama", "Obrácenou hlavu vložím do té druhé", "Sešívám delší nití", "Nezapomenu na konci zapošít, aby hlavy držely při otáčení"]
      },
      {
        obrazek: true,
        nazevCasti: "chapadlo-obraceci-chobotnicka",
        titulekCasti: "Chapadlo (16x)",
        popis: ["6Řo", "Obracím směr 4PDS, 5PDS do jednoho oka, 4PDS", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "sesiti-chapadlo-obraceci-chobotnicka",
        titulekCasti: "Sešití chapadla (8x)",
        popis: ["Vezmu jedno chapadlo od každé barvy a dám je pohledovou stranou do sebe", "Sešivám je nejdelší ze čtyř nití, co z nich vysí", "K tělu budu přišívat na 4 oka bez mezery"]
      },
      {
        obrazek: true,
        nazevCasti: "stastna-obraceci-chobotnicka",
        titulekCasti: "Šťastné oko (2x)",
        popis: ["Mk (6)", "V", "ks, V", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "nastvana-obraceci-chobotnicka",
        titulekCasti: "Naštvané oči (2x)",
        popis: ["Levé: Mk (5)", "Řo, otočím, 5ks, 2Řo, 3ks, Po", "Pravé: Mk (5)", "Řo, 7ks, 2Řo, ks, Po"]
      },
      {
        obrazek: false,
        nazevCasti: "dolpnky-obraceci-chobotnicka",
        titulekCasti: "Doplňky",
        popis: ["Dá se přidat ještě pusinka", "Bílá čárka do oka"]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.tezky,
    nazev: "pavouk",
    title: "Pavouk",
    zkratky: "Mk, Ks, Řo, Po, PDS, V, A",
    pocet: 7,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "pavouk",
        titulekCasti: "Příprava",
        popis: ["Háček (velikost 3 mm)", "YarnArt Jeans 1 klubíčko", "Jakákoliv tenká příze s chlupem", "Kousek černé na pusu", "Bezpečnostní očka (velikost 10 mm a 8 mm)", "Značkovač", "Výplň", "Nůžky", "Jehla"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-pavouk",
        titulekCasti: "Hlava",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "ks (2 řady)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "telo-pavouk",
        titulekCasti: "Tělo",
        popis: ["Mk (6)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "ks (1 řada)", "4ks, A", "3ks, A", "ks (1 řada)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "prvni-noha-pavouk",
        titulekCasti: "První noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "druha-noha-pavouk",
        titulekCasti: "Druhá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (3 řady)", "3Po, ks, 3PDS, ks", "ks (3 řady)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "treti-noha-pavouk",
        titulekCasti: "Třetí noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (4 řady)", "3Po, ks, 3PDS, ks", "ks (4 řady)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "ctvrta-noha-pavouk",
        titulekCasti: "Čtvrtá noha (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (5 řad)", "3Po, ks, 3PDS, ks", "ks (5 řad)", "Po"]
      },
      {
        obrazek: true,
        nazevCasti: "zub-pavouk",
        titulekCasti: "Zub (2x)",
        popis: ["Mk (6)", "2ks, V", "ks (2 řady)"]
      },
      {
        obrazek: false,
        nazevCasti: "doplnky-pavouk",
        titulekCasti: "Doplňky",
        popis: ["Chloupky na nohou", "Pusinka"]
      },
    ],
  },
];

const poleNavodyEN: Array<Navod> = [
  /* {
     obtiznost: ObtiznostNavodu.stredni,
     nazev: "dinosaurus",
     title: "Dino",
     zkratky: "Mr, Inc, Sc, Dec, SlSt, Ch",
     pocet: 7,
     popisy: [
       {
         obrazek: true,
         nazevCasti: "dinosaurus",
         titulekCasti: "What you'll need",
         popis: ["Hook (size 4,5 mm)", "Dolphin Baby 2 balls of yarn for the body", "Dolphin Baby 1 ball of yarn for the spikes", "A piece of black yarn for nostrils", "Safety eyes (size 10 mm)", "Stitch marker", "Scissors", "Filling", "Needle"]
       },
       {
         obrazek: true,
         nazevCasti: "hlava-dinosaura",
         titulekCasti: "Head",
         popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3SC, Inc", "4Sc, Inc", "5Sc, Inc", "Sc (6 rows)", "5Sc, Dec", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "Dec", "SlSt"]
       },
       {
         obrazek: true,
         nazevCasti: "nos-dinosaura",
         titulekCasti: "Nose",
         popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "Sc (3 rows)", "3Sc, Dec", "SlSt"]
       },
       {
         obrazek: true,
         nazevCasti: "telo-dinosaura",
         titulekCasti: "Body",
         popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3SC, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "Sc (3 rows)", "6Sc, Dec", "5Sc, Dec", "4Sc, Dec", "Sc (3 rows)", "3Sc, Dec", "Sc (1 row)", "2Sc, A", "Sc (1 rows)", "SlSt"]
       },
       {
         obrazek: true,
         nazevCasti: "predni-noha-dinosaura",
         titulekCasti: "Front leg (2x)",
         popis: ["Mr (6)", "Inc", "Sc (7 rows)", "SlSt"]
       },
       {
         obrazek: true,
         nazevCasti: "zadni-noha-dinosaura",
         titulekCasti: "Back leg (2x)",
         popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "Sc (2 rows)", "2Sc, Dec", "4Dec, 10Sc", "2Dec, 10Sc", "Sc (8 rows)", "Dec", "SlSt"]
       },
       {
         obrazek: true,
         nazevCasti: "ocas-dinosaura",
         titulekCasti: "Tail",
         popis: ["Mr (6)", "Inc", "11Sc, Inc", "12Sc, Inc", "13Sc, Inc", "14Sc, Inc", "15Sc, Inc", "16Sc, Inc", "17Sc, Inc", "18Sc, Inc", "19Sc, Inc", "20Sc, Inc", "21Sc, Inc", "22Sc, Inc", "23Sc, Inc", "SlSt"]
       },
       {
         obrazek: true,
         nazevCasti: "osten-dinosaura",
         titulekCasti: "Spike (6x)",
         popis: ["Mr (6)", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt"]
       }
     ]
   },*/
  {
    obtiznost: ObtiznostNavodu.lehky,
    nazev: "harold",
    title: "Harold",
    zkratky: "Mr, Sc, Ch, SlSt, Inc, Dec",
    pocet: 5,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "harold",
        titulekCasti: "What you'll need",
        popis: ["Hook (size 3 mm)", "Safety eyes (velikost 10 mm)", "YarnArt Jeans 1 ball of yarn", "Piece of black string for details", "Filling", "Stitch marker", "Scissors", "Needle"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-harold",
        titulekCasti: "Head",
        popis: ["Mr (8)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "Sc (6 rows)", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "SlSt"]
      },
      {
        obrazek: true,
        nazevCasti: "chapadla-harold",
        titulekCasti: "Tentacles",
        popis: ["6*(25Ch, change the direction of crocheting and alternate 2Dec, double Dec, SlSt, into the next chain again on the inside)"]
      },
      {
        obrazek: true,
        nazevCasti: "vyplneni-harold",
        titulekCasti: "Filling",
        popis: ["Don't forget to fill it in."]
      },
      {
        obrazek: true,
        nazevCasti: "uzavreni-harold",
        titulekCasti: "Closing off",
        popis: ["Dec", "SlSt to close off, leave a longer strand of yarn for sewing."]
      },
      {
        obrazek: true,
        nazevCasti: "doplnky-harold",
        titulekCasti: "Details",
        popis: ["Create the eyebrows and mouth with black yarn."]
      }
    ]
  },
  {
    obtiznost: ObtiznostNavodu.stredni,
    nazev: "vodni-zelva",
    title: "Sea turtle",
    zkratky: "Mr, Sc, Ch, SlSt, Inc, Dec",
    pocet: 6,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "vodni-zelva",
        titulekCasti: "What you'll need",
        popis: ["Hook (size 3 mm)", "YarnArt Jeans 1 ball of yarn", "YarnArt Jeans 1 ball of yarn", "Piece of black and pink string for details.", "Safety eyes (10 mm)", "Stitch marker", "Filling", "Scissors", "Needle"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-zelva",
        titulekCasti: "Head",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "Sc (4 rows)", "4Sc, Dec", "3Sc, Dec", "2Sc, Dec", "Sc, Dec", "Dec", "SlSt"]
      },
      {
        obrazek: true,
        nazevCasti: "horni-cast-krunyre-zelva",
        titulekCasti: "Top part of shell",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "Sc (3 rows)", "SlSt"]
      },
      {
        obrazek: true,
        nazevCasti: "spodni-cast-krunyre-zelva",
        titulekCasti: "Bottom part of shell",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt"]
      },
      {
        obrazek: true,
        nazevCasti: "zadni-ploutev-zelva",
        titulekCasti: "Back fin (2x)",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "SlSt", "After finish, fold the circle in half and sew it together."]
      },
      {
        obrazek: true,
        nazevCasti: "predni-ploutev-zelva",
        titulekCasti: "Front fin (2x)",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "SlSt", "After finish, fold the circle in half and sew it together."]
      },
      {
        obrazek: true,
        nazevCasti: "ocasek-zelva",
        titulekCasti: "Tail",
        popis: ["Mr (4)", "Sc (2 rows)", "SlSt"]
      },
      {
        obrazek: true,
        nazevCasti: "doplnky-zelva",
        titulekCasti: "Details",
        popis: ["You can create cheeks one row under the eyes. Choose one point, where to put your needle, skip two chains and then pull it out. Finish off by sewing.", "Create a mouth from a piece of black yarn. Choose two points where you want to have corners of the mouth. Through these two chains, push the needle two times, so you're left witf a loose arch of yarn. Attach this piece of yarn in the middle by sewing."]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.lehky,
    nazev: "obraceci-chobotnicka",
    title: "Two Sided Octopus",
    zkratky: "Mr, Sc, Ch, Sl St, Hdc, Inc, Dec",
    pocet: 8,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "obraceci-chobotnicka",
        titulekCasti: "What you'll need",
        popis: ["Hook (size 3 mm)", "YarnArt Jeans 2 balls of yarn (each a different color)", "YarnArt Jeans black yarn for eyes and details", "Stitch marker", "Scissors", "Needle"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-obraceci-chobotnicka",
        titulekCasti: "Head (2x)",
        popis: ["Mr (8)", "Inc", "Sc, Inc", "2Sc, Inc", "Sc (9 rows)", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "sesiti-hlava-obraceci-chobotnicka",
        titulekCasti: "Sewing the heads together",
        popis: ["Turn one head inside out.", "Put that head into the other one.", "Sew with a longer needle.", "Don't forget to sew so the heads hold together when turning over."]
      },
      {
        obrazek: true,
        nazevCasti: "chapadlo-obraceci-chobotnicka",
        titulekCasti: "Tentacle (16x)",
        popis: ["6Ch", "Change direction 4Hdc, 5Hdc into one chain, 4Hdc", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "sesiti-chapadlo-obraceci-chobotnicka",
        titulekCasti: "Sewing the tentacles together (8x)",
        popis: ["Take one tentacle of each color and put them together the correct way.", "Sew together with the longest of the four strings, that are hanging from them.", "Connect the boby by sewing into four chain."]
      },
      {
        obrazek: true,
        nazevCasti: "stastna-obraceci-chobotnicka",
        titulekCasti: "Happy eye (2x)",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "nastvana-obraceci-chobotnicka",
        titulekCasti: "Angry eyes (2x)",
        popis: ["Left eye: Mr (5)", "Ch, turn around, 5Sc, 2Ch, 3Sc, Sl St", "Right eye: Mr (5)", "Ch, 7Sc, 2Ch, Sc, Sl St"]
      },
      {
        obrazek: false,
        nazevCasti: "dolpnky-obraceci-chobotnicka",
        titulekCasti: "Detail",
        popis: ["You can add a mouth", "White line into eye"]
      },
    ],
  },
  {
    obtiznost: ObtiznostNavodu.tezky,
    nazev: "pavouk",
    title: "Spider",
    zkratky: "Mr, Sc, Ch, Sl St, Hdc, Inc, Dec",
    pocet: 7,
    popisy: [
      {
        obrazek: true,
        nazevCasti: "pavouk",
        titulekCasti: "What you'll need",
        popis: ["Hook (size 3 mm)", "YarnArt Jeans 1 ball of yarn", "Any fluffy yarn", "A piece of black of yarn for the mouth", "Safety eyes (soze 10 mm a 8 mm)", "Stitch marker", "Fillings", "Scissors", "Needle"]
      },
      {
        obrazek: true,
        nazevCasti: "hlava-pavouk",
        titulekCasti: "Head",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "Sc (2 rows)", "5Sc, Dec", "4Sc, Dec", "3Sc, Dec", "2Sc, DEC", "Sc, Dec", "Dec", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "telo-pavouk",
        titulekCasti: "Body",
        popis: ["Mr (6)", "Inc", "Sc, Inc", "2Sc, Inc", "3Sc, Inc", "4Sc, Inc", "5Sc, Inc", "6Sc, Inc", "Sc (3 rows)", "6Sc, Dec", "5Sc, Dec", "Sc (1 rows)", "4Sc, Dec", "3Sc, Dec", "Sc (1 rows)", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "prvni-noha-pavouk",
        titulekCasti: "Front legs (2x)",
        popis: ["Mr (6)", "2Sc, Inc", "Sc (4 rows)", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "druha-noha-pavouk",
        titulekCasti: "Second leg (2x)",
        popis: ["Mr (6)", "2Sc, Inc", "Sc (3 rows)", "3Sl St, Sc, 3Hdc, Sc", "Sc (3 rows)", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "treti-noha-pavouk",
        titulekCasti: "Third leg (2x)",
        popis: ["Mr (6)", "2Sc, Inc", "Sc (4 rows)", "3Sl St, Sc, 3Hdc, Sc", "Sc (4 rows)", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "ctvrta-noha-pavouk",
        titulekCasti: "Fourth leg (2x)",
        popis: ["Mr (6)", "2Sc, Inc", "Sc (5 rows)", "3Sl St, Sc, 3Hdc, Sc", "Sc (5 rows)", "Sl St"]
      },
      {
        obrazek: true,
        nazevCasti: "zub-pavouk",
        titulekCasti: "Tooth (2x)",
        popis: ["Mr (6)", "2Sc, Inc", "Sc (2 řady)"]
      },
      {
        obrazek: false,
        nazevCasti: "doplnky-pavouk",
        titulekCasti: "Details",
        popis: ["Hairs on legs", "Mouth"]
      },
    ],
  },
  /*{
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
