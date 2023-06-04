import { Injectable } from '@angular/core';
import { Pomucka } from 'src/app/types';
import { TranslateService } from '@ngx-translate/core';

const polePomucekCZ: Array<Pomucka> = [
  {
    nazev: "hacek",
    title: "Háček",
    videoURL: "bV-dubempbc",
    kroky: [
      {
        popis: "Existuje široká škála velikostí.",
        obrazek: "velikosti-hacku",
      },
      {
        popis: "Háčky se dělají z různých materiálů.",
        obrazek: "hacek",
      },
      {
        popis: "Mohou být zdobeny rukojeťmi, ergonomickými úchyty a podobně.",
        obrazek: "okrasny-hacek",
      },
    ]
  },

  {
    nazev: "prize",
    title: "Příze",
    videoURL: "IOvAdXIL8Vg",
    kroky: [
      {
        popis: "Dnes můžeme najít obrovské množství značek a materiálů (akrylové, bavlněné, směsové).",
        obrazek: "prize",
      },
      {
        popis: "Na přebalu klubíčka bývá napsáno, kolik metrů obsahuje a na jak velký háček (popř. jehlice) je dělaná.",
        obrazek: null,
      },
      {
        popis: "Samozřejmě můžete využít více velikostí na jeden typ příze (např.: Dolphin Baby se dá háčkovat s háčkem velikosti 4, 4.5 nebo 5 mm), ovlivňuje se tím však velikost oček.",
        obrazek: null,
      },
    ]
  },

  {
    nazev: "znackovac",
    title: "Značkovač",
    videoURL: "LtpxNswfMrs",
    kroky: [
      {
        popis: "Slouží nám k označení počátku řady, ale dá se použít i jiný kousek příze.",
        obrazek: null,
      },
      {
        popis: "Značkovač je příjemná pomůcka, která se na trhu objevuje ve více variantách. Spirála je vhodnější pro silnější příze.",
        obrazek: "znackovac-spirala",
      },
      {
        popis: "Tento má výhodu v tom, že se dá zavřít a je vhodný pro všechny typy příze.",
        obrazek: "znackovac",
      },
    ]
  },

  {
    nazev: "jehla",
    title: "Jehla",
    videoURL: "U6YFVgPBqJ4",
    kroky: [
      {
        popis: "Na přišívání jednotlivých dílů, zapošívání nitě. Upřednostňované plastové jehly se více hodí, pokud děláte se silnějším typem příze.",
        obrazek: "jehla",
      },
    ]
  },

  {
    nazev: "nuzky",
    title: "Nůžky",
    videoURL: "50Hvj3rbFAQ",
    kroky: [
      {
        popis: "Nůžky asi už někdy používal každý z nás a u háčkování to není nějak zvlášť jiné.",
        obrazek: "zastrihovaci-nuzky",
      },
      {
        popis: "Klasické nůžky na papír nejsou na některé příze vhodné, protože potom ji přestříháváme na několikrát a akorát se nám konec třepí.",
        obrazek: "nuzky",
      },
      {
        popis: "Můžete si pořídit nůžky na látku, nebo různé speciálně zdobené, tvarované.",
        obrazek: "zdobene-nuzky",
      },
    ]
  },

  {
    nazev: "bezpecnostni-oci-a-nos",
    title: "Bezpečnostní oči a nos",
    videoURL: "6MKkv62YKcQ",
    kroky: [
      {
        popis: "Dnes se dá pořídit spousta tvarů, velikostí a barev očí a nosů s bezpečnostní pojistkou.",
        obrazek: "bezpecnostni-nos",
      },
      {
        popis: "Uzavírají se jednoduše. Na závit se postupně nasouvá pojistka, která jde zaklapnout tolikrát, kolik má očko závitů.",
        obrazek: "zavit-a-pojistka",
      },
      {
        popis: "Čím pevněji oko uzavřeme tím hezčí, nebo ošklivější efekt můžeme vytvořit. Je to kus od kusu, výrobek od výrobku.",
        obrazek: "bezpecnostni-oko",
      },
    ]
  },

  {
    nazev: "chrastitko",
    title: "Chrastítko",
    videoURL: "ZHjAEHY40-s",
    kroky: [
      {
        popis: "Pokud chcete svůj výrobek nějak ozvláštnit pro dítě, nebo třeba domácího mazlíčka, můžete dovnitř přidat chrastítko.",
        obrazek: "chrastitko",
      },
      {
        popis: "Ty se dnes vyrábí v různých velikostech, tvarech a každé chrastí jinou intenzitou.",
        obrazek: "chrastitko-kulate",
      },
    ]
  },

  {
    nazev: "pocitadlo",
    title: "Počítadlo",
    videoURL: null,
    kroky: [
      {
        popis: "Existuje počítadlo manuální a digitální. Obě mají stejný účel. Počítat řady, co jsme dosud vytvořili.",
        obrazek: null,
      },
      {
        popis: "Manuální může vypadat jako válec a každá jeho strana se dá otáčet. Měníme tak číslovky od 0 do 9. Některá se dají připojit na háček, jiná musíte stále brát a pokládat bokem.",
        obrazek: "manualni",
      },
      {
        popis: "Mnohem pohodlnější je z tohoto důvodu počítadlo digitální, které se dá připevnit na palec a pouhým mačkáním tlačítek buď posouváte číslo o , nebo celý proces resetujete. Existují i taková počítadla, která umí displej rozsvítit.",
        obrazek: "digitalni",
      },
    ]
  },

  {
    nazev: "navijec-prize",
    title: "Navíječ příze",
    videoURL: null,
    kroky: [
      {
        popis: "Když se vám klubíčko zasukuje tak, že ho musíte celé rozplést, nebo se vám rozkutálí, tak je navíječ pomocník pro vás. Jedná se o nástroj, který dělá z kusu provázku opět klubíčko. Jednoduše upevníte jeden konec na horní otáčecí válec, přízi napnete a pak už jen točíte kličkou. Navíječ vytvoří klubíčko",
        obrazek: "navijec-prize",
      },
    ]
  },

  {
    nazev: "vypln",
    title: "Výplň",
    videoURL: "DvlX75z79tw",
    kroky: [
      {
        popis: "Pokud vytváříte něco prostorového (zvířátka, hračky, atd...), tak se vám bude hodit nějaká výplň. Tu může tvořit vata, nebo duté vlákno. Po delší době háčkování můžete použít i zbytky přízí z minulého tvoření. Je to taková recyklace, kterou já uplatňuji třeba u jehelníčků",
        obrazek: "vypln",
      },
    ]
  }
];

const polePomucekEN: Array<Pomucka> = [
  {
    nazev: "hacek",
    title: "Hook",
    videoURL: "bV-dubempbc",
    kroky: [
      {
        popis: "Crochet hooks come in a wide range of sizes.",
        obrazek: null,
      },
      {
        popis: "They are made from many varied materials (metal, plastic, etc.)",
        obrazek: "hacek",
      },
      {
        popis: "Hooks can be decorated by handles, ergonomic grips, etc.",
        obrazek: "okrasny-hacek",
      },
    ]
  },

  {
    nazev: "prize",
    title: "Yarn",
    videoURL: "IOvAdXIL8Vg",
    kroky: [
      {
        popis: "There are a considerable number of brands and materials (acrylic, cotton, mix).",
        obrazek: "prize",
      },
      {
        popis: "Sometimes on the packaging is written how long the yarn is and what size hook it’s made for.",
        obrazek: null,
      },
      {
        popis: "You can use more hook sizes on one type of yarn (e.g., For Dolphin Baby (brand of yarn) you can use sizes 4, 4.5, and 5mm). Size affects holes between the stitches.",
        obrazek: null,
      },
    ]
  },

  {
    nazev: "znackovac",
    title: "Stitch marker",
    videoURL: "LtpxNswfMrs",
    kroky: [
      {
        popis: "Serves the purpose of being an indicator of the start of the row. You can use a piece of yarn.",
        obrazek: null,
      },
      {
        popis: "The marker is a useful tool, which is sold in a few variants. The spiral is used for thicker yarns.",
        obrazek: "znackovac-spirala",
      },
      {
        popis: "This one has the advantage that you can close it and that it’s useful for all types of yarn.",
        obrazek: "znackovac",
      },
    ]
  },

  {
    nazev: "jehla",
    title: "Needle",
    videoURL: "U6YFVgPBqJ4",
    kroky: [
      {
        popis: "For sewing pieces together or incorporating the yarn that’s left into the product. Plastic needles are better if you’re working with a thicker type of yarn.",
        obrazek: "jehla",
      },
    ]
  },

  {
    nazev: "nuzky",
    title: "Scissors",
    videoURL: "50Hvj3rbFAQ",
    kroky: [
      {
        popis: "Using scissors is an easy task for most people. In crocheting it’s no different.",
        obrazek: "zastrihovaci-nuzky",
      },
      {
        popis: "Scissors that are used for paper mostly aren’t suitable for yarn and you’ll have to cut it more times and that makes the yarn flutter.",
        obrazek: "nuzky",
      },
      {
        popis: "You can get scissors that are made for fabric, or in a different shape and with different decorations.",
        obrazek: "zdobene-nuzky",
      },
    ]
  },

  {
    nazev: "bezpecnostni-oci-a-nos",
    title: "Safety eyes and noses",
    videoURL: "6MKkv62YKcQ",
    kroky: [
      {
        popis: "There are many different shapes, sizes and colors of safety eyes and noses with the washers or without them.",
        obrazek: "bezpecnostni-nos",
      },
      {
        popis: "They are easy to close. The washer is pushed onto the thread of the nose or eye which can be pushed as many times as there are threads.",
        obrazek: "zavit-a-pojistka",
      },
      {
        popis: "The more firmly the washer is pushed the “uglier” or “prettier” the effect can be – it depends on the product you’re making.",
        obrazek: "bezpecnostni-oko",
      },
    ]
  },

  {
    nazev: "chrastitko",
    title: "Rattle",
    videoURL: "ZHjAEHY40-s",
    kroky: [
      {
        popis: "If you want to make your product more kid or pet-friendly and fun, you can put a rattle inside your product.",
        obrazek: "chrastitko",
      },
      {
        popis: "Rattles are made in different sizes, shapes, and various intensities of the rattle.",
        obrazek: "chrastitko-kulate",
      },
    ]
  },

  {
    nazev: "pocitadlo",
    title: "Row counter",
    videoURL: null,
    kroky: [
      {
        popis: "There are two types of counters. Manual and digital. Both have the same purpose, to count rows you’ve crocheted.",
        obrazek: null,
      },
      {
        popis: "Manual counter looks like a cylinder that has two parts; both can be turned. They have numbers from 0 to 9 on them. Some can be put on your hook, and some have to be picked up and put down repeatedly.",
        obrazek: "manualni",
      },
      {
        popis: "Digital counters are more comfortable, you can put them on your thumb and by clicking a button you raise your current number by one or reset the counter. Some digital counters can light up the display.",
        obrazek: "digitalni",
      },
    ]
  },

  {
    nazev: "navijec-prize",
    title: "Yarn winder",
    videoURL: null,
    kroky: [
      {
        popis: "If your ball of yarn becomes entangled so you have to untangle it or it unravels before your eyes, the yarn winder is a great tool. This tool takes your yarn and makes it into a ball. You take one side and put it on the top rotating cylinder, strain the yarn and then all you do is just turn the lever.",
        obrazek: "navijec-prize",
      },
    ]
  },

  {
    nazev: "vypln",
    title: "Filling",
    videoURL: "DvlX75z79tw",
    kroky: [
      {
        popis: "If you’re creating a 3D product (animal, toy, etc.), then you will need filling. Cotton or hollow fiber can be used for filling. You can also use your cut off loose yarn, failed attempts. It’s good for recycling.",
        obrazek: "vypln",
      },
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class PomuckyService {

  constructor(private translate: TranslateService) {
  }

  public getPomuckaByName(name: string): Pomucka | undefined{
    if (this.translate.currentLang === "EN") {
      return polePomucekEN.find(element => element.nazev == name);
    }
    else {
      return polePomucekCZ.find(element => element.nazev == name);
    }
  }

  public getVsechnyPomucky(): Array<Pomucka> {
    if (this.translate.currentLang === "EN") {
      return polePomucekEN;
    }
    else {
      return polePomucekCZ;
    }
  }

  public getTitles(): Array<string> {
    if (this.translate.currentLang === "EN") {
      return polePomucekEN.map((item) => item.title);
    }
    else {
      return polePomucekCZ.map((item) => item.title);
    }
  }

}
