import { Injectable } from '@angular/core';
import { Slovnik } from '../types';

const poleSlovniku: Array<Slovnik>=
    [{ nazev: "ro", titulek: "Řetízkové oko", zkratka: "Řo", znacka: "", popis: "Vytvoříme si jednoduchý uzlík, který upevníme přímo na háček. Utahujeme pouze tak, aby prošla další příze. Nabereme na háček a přitáhneme vytvořeným okem. Tím vytváříme řetěz.", animace: "", real: "" }, 
    { nazev: "po", titulek: "Pevné oko", zkratka: "Po", znacka: "", popis: "Ve vytvořené řadě řetízkových ok najdeme druhé očko. Do něj zajedeme háčkem a protáhneme přízi na druhou stranu a zároveň i očkem na háčku. Pevná oka pomáhají tvarovat lokty, kolena nebo zakončují výrobek.", animace: "", real: "" },
    { nazev: "ks", titulek: "Krátký sloupek", zkratka: "Ks", znacka: "", popis: "Ve vytvořené řadě řetízkových ok najdeme druhé očko. Do něj zajedeme háčkem a protáhneme přízí na druhou stranu. Na háčku se nyní objeví 2 nahozená očka, znovu nabereme přízi na háček a provlečeme ji těma dvěma oky, co na něm jsou.", animace: "", real: "" },
    { nazev: "ds", titulek: "Dlouhý sloupek", zkratka: "Ds", znacka: "", popis: "Nabereme přízi na háček a teprve potom zajedeme do vytvořeného oka. Máme 3 příze na háčku. Nabereme a protahujeme po dvou. Takže první dvojici protáhneme první nahození, pak zase nabereme a protáhneme zbylými dvěma.", animace: "", real: "" },
    { nazev: "pds", titulek: "Polodlouhý sloupek", zkratka: "Pds", znacka: "", popis: "Nabereme přízi na háček a teprve potom zajedeme do daného oka. Protáhneme a na háčku máme nyní 3krát ovinutou přízi. Nabereme na háček a tuto přízi protáhneme všemi třemi nahozenými oky.", animace: "", real: "" },
    { nazev: "v", titulek: "Rozháčkování", zkratka: "V", znacka: "", popis: "Ve vytvořené řadě řetízkových ok najdeme druhé očko. Do něj zajedeme háčkem a protáhneme přízí na druhou stranu. Na háčku se nyní objeví 2 nahozená očka, znovu nabereme přízi na háček a provlečeme ji těma dvěma oky, co na něm jsou. Pak uděláme to stejné do stejného oka ještě jednou. Jinak řečeno rozháčkování je o tom vložit dva krátké sloupky do jednoho oka. Tento krok funguje i u dalších stylů, ale to se většinou píše jinak (např.: 2 Pds do jednoho oka, což znamená 2 polodlouhé sloupky do jednoho oka).", animace: "", real: "" },
    { nazev: "a", titulek: "Sháčkování", zkratka: "A", znacka: "", popis: "Sháčkování je opak rozháčkování, tedy místo toho, aby byly dva krátké sloupky do jednoho oka, tak je děláme najednou. Protáhneme jedním okem, hned druhým a na háčku držíme najednou 3 nahozená očka. Protáhneme je všechna najednou a docílíme utažení. Existuje i metoda, aby se dělaly menší dírky a povrch výrobku vypadal čistší. Bereme pouze za přední nit a to tak, že zajedeme háčkem za vnější nit a hned za další. Zase 3 očka na háčku, ale tentokrát protáhneme po dvojicích.", animace: "", real: "" },
    { nazev: "mk", titulek: "Magický kroužek", zkratka: "Mk", znacka: "", popis: "Dostatečný kus příze položíme mezi prostředníček a ukazováček levé ruky (jestliže jsem levák, pak používám ruce opačně). Omotáme kolem vnější strany ukazováčku, vnitřní strany a poté vnější palce a vracíme se zpět tam, kde začíná příze. Mezi prostředníček a ukazováček. Vytvoříme tak „znak nekonečna“. Vezmeme si háček a nabereme spodem vnitřní přízi u palce, vrchem vnější u ukazováčku, vnější u palce. Pravým ukazováčkem si pak tyto tři přehozené části podržíme a nabereme si přízi na levou ruku. To se dělá tak, že přiložíme přízi na malíček a dvakrát obmotáme kolem ukazováčku levé ruky tak, aby byla příze napnutá a byla schopná háčkovat. Pak nabereme na háček a protáhneme všemi třemi oky, při tom levým palcem a prostředníčkem držíme vznikající kruh. V tomto okamžiku se dostáváme do pevného bodu. Máme kruh a máme volný provázek na konci. Háčkujeme směrem doleva (leváci doprava). Háčkem nabereme kruh tím, že půjdeme zevnitř ven. Společně s kruhem budeme nabírat i svěšený provázek, díky kterému nakonec kruh utáhneme, aby byl opravdu kruhem. Je to jeden z nejtěžších stylů, který budete hojně využívat, pokud se nerozhodnete jej obcházet. Dá se to jednoduše. Vytvoříte si řetěz o 2 řetízkových očkách, vrátíte se do prvního a v něm uděláte 6 krátkých sloupků. Číslo 6 je takový standard při háčkování kruhu, ale tento základ můžete klidně změnit podle toho, jak se vám to hodí. Například naše Chobotnička Harold má základ 8.", animace: "", real: "" },]

@Injectable({
  providedIn: 'root'
})
export class SlovnikService {

    mapaSlovnik: any;

    constructor() {
      this.initMap();
    }

  private initMap(){
    this.mapaSlovnik = new Map();
    poleSlovniku.forEach(slovnik=>{
      this.mapaSlovnik.set(slovnik.nazev, slovnik);
    });
  }

  public getSlovnikByName(name: string) {
    return this.mapaSlovnik.get(name);
  }

  public getVsechnySlovnik(): Array<Slovnik>{
    return poleSlovniku;
  }

}
