import { Injectable } from '@angular/core';
import { Pomucka } from '../types/pomucka'

 const polePomucek = [{ nazev: "Háček", popis: "Existuje široká škála velikostí.", popis1: "Háčky se dělají z různých materiálů a mohou být zdobeny rukojeťmi, ergonomickými úchyty a podobně.", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Příze", popis: "Dnes můžeme najít obrovské množství značek a materiálů (akrylové, bavlněné, směsové).", popis1: "Na přebalu klubíčka bývá napsáno, kolik metrů obsahuje a na jak velký háček (popř. jehlice) je dělaná. Samozřejmě můžete využít více velikostí na jeden typ příze (např.: Dolphin Baby se dá háčkovat s háčkem velikosti 4, 4.5 nebo 5 mm), ovlivňuje se tím však velikost oček.", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" }, 
    { nazev: "Značkovač", popis: "Slouží nám k označení počátku řady.", popis1: "Dá se použít i jiný kousek příze.", popis2: "ale značkovač je příjemná pomůcka, která se na trhu objevuje ve více variantách.", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Jehla", popis: "Na přišívání jednotlivých dílů, zapošívání nitě. Upřednostňované plastové jehly se více hodí, pokud děláte se silnějším typem příze.", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Nůžky", popis: "Nůžky asi už někdy používal každý z nás a u háčkování to není nějak zvlášť jiné. Můžete si pořídit nůžky na látku, nebo různé speciálně zdobené, tvarované.", popis1: "Klasické nůžky na papír nejsou na některé příze vhodné, protože potom ji přestříháváme na několikrát a akorát se nám konec třepí.", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Bezpečnostní oči a nos", popis: "Dnes se dá pořídit spousta tvarů, velikostí a barev očí a nosů s bezpečnostní pojistkou.", popis1: "Uzavírají se jednoduše. Na závit se postupně nasouvá pojistka, která jde zaklapnout tolikrát, kolik má očko závitů.", popis2: "Čím pevněji oko uzavřeme tím hezčí, nebo ošklivější efekt můžeme vytvořit. Je to kus od kusu, výrobek od výrobku.", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Chrastítko", popis: "Pokud chcete svůj výrobek nějak ozvláštnit pro dítě, nebo třeba domácího mazlíčka, můžete dovnitř přidat chrastítko. Ty se dnes vyrábí v různých velikostech, tvarech a každé chrastí jinou intenzitou.", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Počítadlo", popis: "Existuje počítadlo manuální a digitální. Obě mají stejný účel. Počítat řady, co jsme dosud vytvořili.", popis1: "Manuální může vypadat jako válec a každá jeho strana se dá otáčet. Měníme tak číslovky od 0 do 9. Některá se dají připojit na háček, jiná musíte stále brát a pokládat bokem.", popis2: "Mnohem pohodlnější je z tohoto důvodu počítadlo digitální, které se dá připevnit na palec a pouhým mačkáním tlačítek buď posouváte číslo o 1, nebo celý proces resetujete. Existují i taková počítadla, která umí displej rozsvítit.", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Navíječ příze", popis: "Když se vám klubíčko zasukuje tak, že ho musíte celé rozplést, nebo se vám rozkutálí, tak je navíječ pomocník pro vás. Jedná se o nástroj, který dělá z kusu provázku opět klubíčko. Jednoduše upevníte jeden konec na horní otáčecí válec, přízi napnete a pak už jen točíte kličkou. Navíječ vytvoří klubíčko.", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },
    { nazev: "Výplň", popis: "Pokud vytváříte něco prostorového (zvířátka, hračky, atd...), tak se vám bude hodit nějaká výplň. Tu může tvořit vata, nebo duté vlákno. Po delší době háčkování můžete použít i zbytky přízí z minulého tvoření. Je to taková recyklace, kterou já uplatňuji třeba u jehelníčků.", popis1: "", popis2: "", fotka: "", fotka1: "", fotka2: "", videoURL: "" },]



    @Injectable({
        providedIn: 'root'
      })
      export class PomuckyService {
      
        pomucky: Map<string,Pomucka>;
      
        constructor() {
          this.initMap();
        }
      
        private initMap(){
          this.pomucky = new Map();
          polePomucek.forEach(pomucka=>{
            this.pomucky.set(pomucka.nazev, pomucka);
          });
        }
      }
