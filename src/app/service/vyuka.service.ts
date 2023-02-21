import { Injectable } from '@angular/core';
import { InfoVyukyCz, InfoVyukyEn, VyukaCz, VyukaEn } from '../types';

const poleVyrobkuCz: Array<VyukaCz> = [
  {
    nazevCz: "chobotnicka",
    titleCz: "Chobotnicka",
    popisCz: "vyrobek na vytvoreni chobotnicky",
    pocetCz: "12",
    krokyCz: [
      {
        cisloCz: "1.",
        stylCz: "Mk",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.",
        videoUrlCz: "06DsV4I1fN8"
      },
      {
        cisloCz: "2.",
        stylCz: "V",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Tomuto kroku se říká rozháčkování, nebo-li rozšiřování. Díky němu budeme schopni náš výrobek zvětšovat. Rozháčkování lze aplikovat na skoro na každý styl. Nejčastěji je používám v souvislosti s krátkým, dlouhými, nebo polodlouhými sloupky.</p><p>Stále si budeme udržovat zadní nit v kroku, abychom mohli utáhnout a zbavit se tak případné mezery v magickém kroužku.",
        videoUrlCz: "TW0VbGVXBps"
      },
      {
        cisloCz: "3.",
        stylCz: "Ks, V",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Postupné rozšiřování. Pokud chceme tvořit pravidelný tvar, je potřeba pravidelně výrobek zvětšovat. Kvůli tomu budeme postupovat tak, že budeme stále používat rozháčkování, ale v kombinaci s krátkými sloupky. </p><p>Představte si to, jako by minulý krok byl 0ks, V a teď budeme pokračovat 1ks, V a pak 2ks, V.",
        videoUrlCz: "Ivyrl2Mb2o8"
      },
      {
        cisloCz: "4. a 5.",
        stylCz: "Ks",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Následující 2 řady budou stejné, abychom docílili nějakého tvaru. Rozšířili jsme dostatečně, ale za pomoci těchto řad se nám chobotnička ještě trošku zvětší. Kdybyste ji chtěli vyšší, musíte přidat více řad.",
        videoUrlCz: "WJJbSN6qTpc"
      },
      {
        cisloCz: "6.",
        stylCz: "Ks, A",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Stejně jako u kroku 3 jsme zvětšovali chobotničku, tak teď ji budeme pro změnu uzavírat. Opět to napomáhá k tvarování hlavičky chobotnice. Značka <i>A</i> je stažení, jinak řečeno sháčkování. Docílíme ho za pomoci spojení 2 krátkých sloupků.",
        videoUrlCz: "MwfZ48fExG0"
      },
      {
        cisloCz: "7.",
        stylCz: "A",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Tímto krokem pokračujeme v postupném sháčkování. U většiny výrobků by byl tohle poslední krok, ale tím, že mi děláme chapadla jednolitě s hlavičkou, budeme pokračovat. Je potřeba tento krok moc nestahovat. Snažit se dělat větší mezery, aby se dalo navázat chapadly.</p><p>Posledním pevným okem celý výrobek uzavřeme a je nutné nechat si delší konečnou nit, abychom měli po vyplnění, jak uzavřít spodek chobotničky.",
        videoUrlCz: "GAR5JQXzk88"
      },
      {
        cisloCz: "8.",
        stylCz: "Po, Pds, Ds",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Pevné očko, polodlouhý sloupek, dlouhý sloupek, polodlouhý. Tato kombinace půjde do každého jednoho oka. Čili v konečném výsledku budeme opakovat 6krát. Vytváříme tím obloučky, které v našem případě zastávají chapadla. </p><p>Pevné očko v tomto případě tvoří přechod mezi jednotlivými chapadly, dlouhé a polodlouhé sloupky naopak dodávají tvar.</p><p>Je to docela blízko sebe, tak dávejte pozor, ať nevynecháte.",
        videoUrlCz: "iXgXMEuX-HE"
      },
      {
        cisloCz: "9.",
        stylCz: null,
        pouzijemeCz: "Bezpečnostní očka",
        popisCz: " Přidělávání bezpečnostních oček není vždy úplně jednoduché. Je spousta z nás, co se dívají, aby očka nebyla křivě a dlouze si nad tím lámeme hlavu. Nebojte, mám to stejně.</p><p>Takovou malou pomůckou by nám mělo být počítání řad. Pak by se očka měla nacházet v rovině. </p><p>Vždy vyrovnání očí kontrolujte před použitím pojistky. Některá očka k sobě mají pojistky, které se dají horko těžko zacvaknout, natož oddělat.",
        videoUrlCz: "MPAzRwy3-g0"
      },
      {
        cisloCz: "10.",
        stylCz: null,
        pouzijemeCz: "Pojistka, výplň",
        popisCz: "Bezpečnostní očko se dá zacvaknout tolikrát, kolik máme závitů na očku. Ovšem čím větší je pojistka a tenčí je příze, tím více je pojistka znatelná. Někdy nám pomáhá v optickém zkrášlení obličeje (jako mělo zvířátko najednou hezčí očka). </p><p>Chobotničku si musíme samozřejmě vyplnit. Takže popadněte vadu, duté vlákno, staré odstřižky a jdeme na to. S vyplňováním to nemusíte moc přehánět, aby se vám povedlo zapošití.",
        videoUrlCz: "dBmU8n4AfDg"
      },
      {
        cisloCz: "11.",
        stylCz: null,
        pouzijemeCz: "Jehla",
        popisCz: "Zašíváme tak, že si na jehlu navlečeme přízi, kterou jsme ukončovali. Tu budeme nejprve provlékat všemi oky typu A. Tímto krokem docílíme stažení. Ovšem pokud to někdo při plnění trochu přehnal, tak nám stále zůstává otvor. </p><p>Šití je podle mého názoru hodně individuální, proto je čistě na vás, zda budete šít podle mého vzoru, nebo si najedete vlastní styl. Každopádně hodně utahujte. </p><p>Nejdůležitější je však zakončení celé práce tak, aby se vám výrobek nerozpletl. Respektive to šití se nevyvléklo.",
        videoUrlCz: "IwOXPcn8H3E"
      },
      {
        cisloCz: "12.",
        stylCz: null,
        pouzijemeCz: "Jehla, nůžky",
        popisCz: "Zakončení probíhá následovně. Vyberu si nějaké nahodilé místo, kde s nití vyjedu (většinou na zádech tvorečka), zabořím se do očka vedle s tím, že vyjedu ve stejném oku jako poprvé. Nestáhnu to úplně, ale tak, aby mi zůstal malinký oblouček, kterým konec protáhneme a stáhneme. Vznikne uzlík a na jehle zůstane nit. Tu nahodile zasuneme do výrobku a vynoříme se nejlépe na druhé straně. </p><p>Jehlu můžeme zahodit a vezmeme si nůžky. Nitku napneme a co nejblíže výrobku ustřihneme.",
        videoUrlCz: "70BrpsQ4lzo"
      },
    ]
  },

  {
    nazevCz: "ruze",
    titleCz: "Růže",
    popisCz: "Vytvořme si společně okrasnou růži společně s listem.",
    pocetCz: "17",
    krokyCz: [
      {
        cisloCz: "1.",
        stylCz: null,
        pouzijemeCz: "Háček",
        popisCz: "Vytvoříme si základ pro tvoření řetízkového oka. Kolem ukazováčku a prostředníčku levé ruky obmotáme přízi. Položím na vnitřní stranu prstů a palcem přidržím, obtočím jednou, vytvořím na vnitřku kříž a rovnoběžně znovu obtočím kolem prstů. Přední nit podeberu spodem a druhou vrchem. Zaháknu se za ni a protáhnu ji přes tu první. ",
        videoUrlCz: "XL4ze9vLC3s"
      },
      {
        cisloCz: "2.",
        stylCz: "Řo",
        pouzijemeCz: "Háček",
        popisCz: "Teď máme na háčku vytvořený uzlík, nabereme přízi a protáhneme ji okem. Zase je jedno na háčku, naberu přízi a protáhnu. Takto celkem 27krát.",
        videoUrlCz: "jOlXPt2eARQ"
      },
      {
        cisloCz: "3.",
        stylCz: "Ds, Řo",
        pouzijemeCz: "Háček",
        popisCz: "Začneme odpočítáním třetího očka, a tam vytvoříme dlouhé sloupky, celkem 2 do jednoho oka. Přidáme řetízkové oko, které nám pomáhá vytvářet květy.",
        videoUrlCz: "X8WGTnnEC_A"
      },
      {
        cisloCz: "4.",
        stylCz: "Ds, Řo",
        pouzijemeCz: "Háček",
        popisCz: "Abychom vynahradili mezeru vzniklou řetízkovým okem, tak jedno oko na řetězu vynecháme. Další krok tedy bude ob jedno oko. 3 dlouhé sloupky do jednoho oka, řetízkové oko a takto pořád dokola, dokud nejsme na konci.",
        videoUrlCz: "Y_pbeKZayz8"
      },
      {
        cisloCz: "5.",
        stylCz: "Ds, Řo",
        pouzijemeCz: "Háček",
        popisCz: "Vytvoříme 2 řetízková oka, abych nám vznikla jakási nadstavba. Otočíme celý výrobek na druhou stranu (tzv. výrobek převrátíme) a pokračujeme druhou řadou.</p><p>Háčkujeme opakovaně dlouhý sloupek, do dalšího oka 2krát dlouhý sloupek, další oko opět jednou a 2 řetízková oka, která ukončíme v místě předešlého řetízkového očka z kroku 3 a 4.</p><p>Konkrétně si můžete vybrat mezi krátkým sloupkem, nebo pevným očkem (obojí ukázáno na videu), rozdíl je ve stažení a tedy i mezeře mezi listy.",
        videoUrlCz: "i67kKrqFqRY"
      },
      {
        cisloCz: "6.",
        stylCz: "Ds, Řo",
        pouzijemeCz: "Háček",
        popisCz: "Pokračujeme stejným způsobem. 2 řetízková oka, nahodím, vytvořím dlouhý sloupek do dalšího oka, pak 2 dlouhé sloupky do jednoho, v dalším bude opět jedno a pak 2 řetízková oka, ukončena krátkým sloupkem, nebo pevným očkem v místě řetízkového očka předešlé řady.",
        videoUrlCz: "oPUgWP9Lglw"
      },
      {
        cisloCz: "7.",
        stylCz: "Řo, Ds, Po",
        pouzijemeCz: "Háček",
        popisCz: "Poslední lístek se dělá stejně, jako ty doposud, jediný rozdíl je v tom, že poslední dvojice řetízkových oček se ukončí 2 očka dolů po straně. </p><p>Po zakončení pevným okem, máme kytičku hotovou a můžeme ji jít točit a tvarovat.",
        videoUrlCz: "p-SBATchhlo"
      },
      {
        cisloCz: "8.",
        stylCz: null,
        pouzijemeCz: "Jehla",
        popisCz: "Růži se snažím smotat, co nejvíc to jde, aby jako růže vypadala. Hodně tahám a tlačím při rolování. Pak to musíme podchytit tím, že to zašijeme. Šití je podle mě intuitivní, takže je to čistě na vás, já jen ukazuju příklad toho, jak to dělám já.",
        videoUrlCz: "vO_Qf_xJh9w"
      },
      {
        cisloCz: "9.",
        stylCz: null,
        pouzijemeCz: "Jehla",
        popisCz: "Zakončení je vždy to nejdůležitější a dělá se to poměrně jednoduše. Když jsme spokojená s šitím a drží mi výrobek tvar, tak mohu zakončit. Vyberu si bod, ve kterém vyjedu jehlou a protáhnu nit. Následně bodnu do očka vedle mého místa výsunu a mířím do očka, z něhož vychází nit. Opatrně utahuju, ale ne moc, potřebujeme se dostat do onoho oka, co se tvoří.</p><p>Opět je to individuální, jak to uděláte a tohle je jenom můj příklad.",
        videoUrlCz: "vELtmQHUzOM"
      },
      {
        cisloCz: "10.",
        stylCz: "Řo",
        pouzijemeCz: "Háček",
        popisCz: "Počneme si list. Můžete jich mít libovolné množství, ale musíte se vrátit zpět k tomuto kroku, abyste mohli podle videí tvořit znova. </p><p>Uděláme 13 řetízkových ok.",
        videoUrlCz: "oqk38lrk-JQ"
      },
      {
        cisloCz: "11.",
        stylCz: "Ds",
        pouzijemeCz: "Háček",
        popisCz: "Odpočítám si 3 očka a do toho třetího udělám 2 DS. Další oko je pro mě obohaceno dlouhými sloupky s rozdílem toho, že místo jednoho nahození nastanou dvě. Je to pořád to samé. Do jednoho oka celkem 2 krát.",
        videoUrlCz: "StfiMAJ2POc"
      },
      {
        cisloCz: "12.",
        stylCz: "Ds",
        pouzijemeCz: "Háček",
        popisCz: "Stejně pokračuju i nadále s rozdílem toho, že do každého jednoho oka padne jeden dlouhý sloupek s dvojitým nahozením. Do následujících 3 oček.",
        videoUrlCz: "fxHwZU5r5fw"
      },
      {
        cisloCz: "13.",
        stylCz: "Ds, Pds",
        pouzijemeCz: "Háček",
        popisCz: "Do dvou po sobě jdoucích ok uděláme klasický dlouhý sloupek, jednou nahodím, dvakrát protáhnu. Pak polodlouhý, jednou nahodím a jednou protáhnu.",
        videoUrlCz: "ebjvvrVYHnI"
      },
      {
        cisloCz: "14.",
        stylCz: "Pds, Ks",
        pouzijemeCz: "Háček",
        popisCz: "Jeden krátký sloupek, do dalšího oka 3 a zase jedno. Potom děláme to samé, co na druhé straně akorát obráceně. Tak pojďme na to. Jeden polodlouhý sloupek prosím!",
        videoUrlCz: "Qf99mIRTvas"
      },
      {
        cisloCz: "15.",
        stylCz: "Ds",
        pouzijemeCz: "Háček",
        popisCz: "Dva klasické dlouhé sloupky, jedno nahození a dvě protažení. Potom třikrát dlouhý sloupek po dvou nahozeních a 3 protaženích. Dva krát do jednoho očka ten dlouhý sloupek o dvou nahozeních. Předposlední očko si ponese 3 dlouhé sloupky.",
        videoUrlCz: "KYN4iC1lsKA"
      },
      {
        cisloCz: "16.",
        stylCz: "Po, Řo, Ks",
        pouzijemeCz: "Háček",
        popisCz: "Pevným okem propojíme náš konec se začátkem výrobku a pokračujeme 3 řetízkovými očky. Výrobek otočím a udělám 2 krátké sloupky. Pak pevným okem zakončím a mám list i s malým stonkem. Ovšem není nutný a pokud se vám nelíbí, nemusí tam vůbec být.</p><p>List přišijeme k růži.",
        videoUrlCz: "Rt7hW4sszoo"
      },
      {
        cisloCz: "17.",
        stylCz: null,
        pouzijemeCz: "Jehla",
        popisCz: "Dá se zakončit poměrně neviditelně, uvnitř jednoho kvítku, jako je ve videu.",
        videoUrlCz: "0eHFJNXWfUw"
      },
    ]
  },

  {
    nazevCz: "zalozka",
    titleCz: "Záložka",
    popisCz: "Veselá záložka do knihy pro malé i velké.",
    pocetCz: "18",
    krokyCz: [
      {
        cisloCz: "1.",
        stylCz: "Mk",
        pouzijemeCz: "Háček",
        popisCz: "Začneme jedním z nejtěžších stylů, a to je magický kroužek. Buď ho můžete dělat jako já na videu, nebo si práci zjednodušit za pomoci 2 řetízkových ok a následného píchnutí 6krát do prvního oka.",
        videoUrlCz: "NOXIskqmC0Q"
      },
      {
        cisloCz: "2.",
        stylCz: "V",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Označíme si nějakým způsobem začátek řady. Já mám značkovače, ale vám může stačit i nit jiné příze. Rozháčkování je o tom, že dělám 2 krátké sloupky do každého jednoho oka. </p><p>První očko není vždycky úplně zřetelné a mnohdy se do něj nedá ani dostat, to je ovšem ovlivněno samotným utahováním. </p><p>Nit, kterou jsem kroužek stahovala, si držím stále pod výrobkem, abych mohla mírně utáhnout.",
        videoUrlCz: "8COmvVjuNCI"
      },
      {
        cisloCz: "3.",
        stylCz: "Ks, V",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Postupné rozháčkování. Přidáváme mezi rozháčkování krátké sloupky. V tomto případě to bude jeden krátký sloupek, rozháčkování. Celkem 6krát. Kontrolou vám může být přepočítání ok. Vždycky se zvyšuje počet o 6, pokud nejedeme zrovna rovné řady, tam se nic nemění.",
        videoUrlCz: "s61YbmAz8ig"
      },
      {
        cisloCz: "4.",
        stylCz: "Ks, V",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Pokračujeme v postupném rozháčkování, takže už vás asi napadne, že budeme postupovat 2 krátké sloupky, rozháčkování. Na konci celkem 24 oček. </p><p> Už na konci tohoto kroku vidíte, jak se naše kolečko plynule zvětšuje.",
        videoUrlCz: "Eu2U2H1vOsM"
      },
      {
        cisloCz: "5.",
        stylCz: "Ks, V",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Co asi bude dál? Ano, správně! 3 krátké sloupky a rozháčkování, zase celkem 6krát a nakonec bude 30 oček k napočítání.</p><p>Naposledy se rozšíříme. 4 krátké sloupky a rozháčkování. Celkem 6krát, z toho plyne, že nakonec bude 36 oček.",
        videoUrlCz: "Soz8p-_p0gk"
      },
      {
        cisloCz: "6., 7. a 8.",
        stylCz: "ks",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Následující 3 řady budou stejné. Skládat je budeme pouze z krátkých sloupků, čili rovných řad, abychom výrobku dali nějakou velikost.",
        videoUrlCz: "nFvPTp6DPl0"
      },
      {
        cisloCz: "9.",
        stylCz: "Ks, A",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Vytvořenou kopuli budeme teď stahovat, abychom z ní udělali kouli. Stejně jako existuje postupné rozháčkování, tak teď se seznámíme s postupným sháčkováním. To funguje úplně stejně, ale s opačným pořadím. Rozháčkování přidává krátké sloupky do mezer, sháčkování ubírá. </p><p>Takže teď nás čekají 4 krátké sloupky, sháčkování. Celkem 6krát a budeme očka zase po 6 odebírat. Závěr této řady bude vyjádřen 30 očky.",
        videoUrlCz: "qKeh_ILkgm4"
      },
      {
        cisloCz: "10.",
        stylCz: "Ks, A",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Tentokrát 3 krátké sloupky a stažení. Už v tomto bodě jde hezky vidět, jak se nám výrobek stahuje a tvaruje. </p><p>Pokud vlastníte bezpečnostní očka, tak je teď můžete přidat a upevnit. Já je budu pro tento okamžik háčkovat.",
        videoUrlCz: "eM3djYCpFu0"
      },
      {
        cisloCz: "11. a 12.",
        stylCz: "Ks, A",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Postupně pokračujeme dolů s počtem krátkých sloupků. Teď 2 krátké sloupky a stáhnu.</p><p>Stažení na 1 krátký sloupek a sháčkování. Po tomto kroku budeme hlavičku vyplňovat a pro vás s bezpečnostními očky je tohle poslední možnost je přidat. </p><p>Vyplníme výrobek vatou, dutým vláknem, zbytky přízí, nebo výplní ze starých polštářů.",
        videoUrlCz: "oXCrwIgnyfE"
      },
      {
        cisloCz: "13. ",
        stylCz: "A",
        pouzijemeCz: "Háček, značkovač",
        popisCz: "Když jsme s vyplněním spokojeni, tak jednoduše po dvojicích stáhneme všech 12 současných oček. Bodneme do dalšího oka, jako když se začíná další řada a uděláme pevné očko, ukončíme, necháme nit delší na zapošití.",
        videoUrlCz: "LRfLBApNgvQ"
      },
      {
        cisloCz: "14.",
        stylCz: null,
        pouzijemeCz: "Jehla, nůžky",
        popisCz: "Zašijeme kouli tak, aby zmizela díra uprostřed a projedeme ji tak, aby se nám schovaly veškeré nedokonalosti. Zapošijeme, zakončíme. Upravíme kouli.",
        videoUrlCz: "BP8IxCX-xR4"
      },
      {
        cisloCz: "15.",
        stylCz: "Mk, Po",
        pouzijemeCz: "Háček, nůžky",
        popisCz: "Vytvoříme si spolu oči. Pokud se vám nechce je háčkovat, můžete si vzít filc a vystřihnout i oči. Pokud vás to háčkování zatím baví, pojďte si je se mnou uháčkovat. Magický kroužek, stejně jako v prvním kroku.</p><p>Do prvního oka uděláme pevné očko. Vytvoříme jen takto malinká očko. Postup opakujeme a vytvoříme si druhé.",
        videoUrlCz: "SyGaT44H728"
      },
      {
        cisloCz: "16.",
        stylCz: null,
        pouzijemeCz: "Jehla, nůžky",
        popisCz: "Našijeme očka. Opět je to na vás, video jen ukazuje, jak bych to dělala já.",
        videoUrlCz: "7VhN_yctywY"
      },
      {
        cisloCz: "17.",
        stylCz: null,
        pouzijemeCz: "Jehla",
        popisCz: "Našijeme pusinku, a to buď opět nějak individuálně, nebo podle mého typu z videa. Samozřejmě můžete mít i jiný výraz. Smajlík může být smutný, naštvaný… prostě jaký chcete.",
        videoUrlCz: "7iNCCeg7G1Q"
      },
      {
        cisloCz: "18.",
        stylCz: "Řo, ks",
        pouzijemeCz: "Háček",
        popisCz: "Teď k tomu té záložce. Buď uděláme řetízkové oko, nebo jenom natáhneme provázek, nebo podle videa můžeme vytvořit širší pruh. Řetízková oka podle šířky, udělám si jedno navíc. Výrobek otočím a vracím se krátkými sloupky, na konci si udělám jedno řetízkové a zase se vracím sloupky zpět. Takto opakuju, dokud nemám vyhovující délku.",
        videoUrlCz: "c0hboILLyRI"
      },
      {
        cisloCz: "17.",
        stylCz: "Po",
        pouzijemeCz: "Háček, nůžky",
        popisCz: "Připevníme pás k hlavičce. Naberu oko z pásu a zároveň z hlavičky, pevným okem spojím. Na konci po, ustřihnu a zakončím.",
        videoUrlCz: "6mgPGFgQMCg"
      },
      {
        cisloCz: "18.",
        stylCz: "Řo",
        pouzijemeCz: "Háček",
        popisCz: "Druhý způsob je udělat si jenom jeden jednoduchý řetízek, který se pak jedním jednoduchým utažením připevní k hlavičce smajlíka.",
        videoUrlCz: "JF-W5Dk3IE0"
      },
    ]
  }
];

const poleVyrobkuEn: Array<VyukaEn> = [
  {
    nazevEn: "chobotnicka",
    titleEn: "Chobotnicka",
    popisEn: "vyrobek na vytvoreni chobotnicky",
    pocetEn: "12",
    krokyEn: [
      {
        cisloEn: "1.",
        stylEn: "Mk",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.",
        videoUrlEn: "06DsV4I1fN8"
      },
      {
        cisloEn: "2.",
        stylEn: "V",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Tomuto kroku se říká rozháčkování, nebo-li rozšiřování. Díky němu budeme schopni náš výrobek zvětšovat. Rozháčkování lze aplikovat na skoro na každý styl. Nejčastěji je používám v souvislosti s krátkým, dlouhými, nebo polodlouhými sloupky.</p><p>Stále si budeme udržovat zadní nit v kroku, abychom mohli utáhnout a zbavit se tak případné mezery v magickém kroužku.",
        videoUrlEn: "TW0VbGVXBps"
      },
      {
        cisloEn: "3.",
        stylEn: "Ks, V",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Postupné rozšiřování. Pokud chceme tvořit pravidelný tvar, je potřeba pravidelně výrobek zvětšovat. Kvůli tomu budeme postupovat tak, že budeme stále používat rozháčkování, ale v kombinaci s krátkými sloupky. </p><p>Představte si to, jako by minulý krok byl 0ks, V a teď budeme pokračovat 1ks, V a pak 2ks, V.",
        videoUrlEn: "Ivyrl2Mb2o8"
      },
      {
        cisloEn: "4. a 5.",
        stylEn: "Ks",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Následující 2 řady budou stejné, abychom docílili nějakého tvaru. Rozšířili jsme dostatečně, ale za pomoci těchto řad se nám chobotnička ještě trošku zvětší. Kdybyste ji chtěli vyšší, musíte přidat více řad.",
        videoUrlEn: "WJJbSN6qTpc"
      },
      {
        cisloEn: "6.",
        stylEn: "Ks, A",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Stejně jako u kroku 3 jsme zvětšovali chobotničku, tak teď ji budeme pro změnu uzavírat. Opět to napomáhá k tvarování hlavičky chobotnice. Značka <i>A</i> je stažení, jinak řečeno sháčkování. Docílíme ho za pomoci spojení 2 krátkých sloupků.",
        videoUrlEn: "MwfZ48fExG0"
      },
      {
        cisloEn: "7.",
        stylEn: "A",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Tímto krokem pokračujeme v postupném sháčkování. U většiny výrobků by byl tohle poslední krok, ale tím, že mi děláme chapadla jednolitě s hlavičkou, budeme pokračovat. Je potřeba tento krok moc nestahovat. Snažit se dělat větší mezery, aby se dalo navázat chapadly.</p><p>Posledním pevným okem celý výrobek uzavřeme a je nutné nechat si delší konečnou nit, abychom měli po vyplnění, jak uzavřít spodek chobotničky.",
        videoUrlEn: "GAR5JQXzk88"
      },
      {
        cisloEn: "8.",
        stylEn: "Po, Pds, Ds",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Pevné očko, polodlouhý sloupek, dlouhý sloupek, polodlouhý. Tato kombinace půjde do každého jednoho oka. Čili v konečném výsledku budeme opakovat 6krát. Vytváříme tím obloučky, které v našem případě zastávají chapadla. </p><p>Pevné očko v tomto případě tvoří přechod mezi jednotlivými chapadly, dlouhé a polodlouhé sloupky naopak dodávají tvar.</p><p>Je to docela blízko sebe, tak dávejte pozor, ať nevynecháte.",
        videoUrlEn: "iXgXMEuX-HE"
      },
      {
        cisloEn: "9.",
        stylEn: null,
        pouzijemeEn: "Bezpečnostní očka",
        popisEn: " Přidělávání bezpečnostních oček není vždy úplně jednoduché. Je spousta z nás, co se dívají, aby očka nebyla křivě a dlouze si nad tím lámeme hlavu. Nebojte, mám to stejně.</p><p>Takovou malou pomůckou by nám mělo být počítání řad. Pak by se očka měla nacházet v rovině. </p><p>Vždy vyrovnání očí kontrolujte před použitím pojistky. Některá očka k sobě mají pojistky, které se dají horko těžko zacvaknout, natož oddělat.",
        videoUrlEn: "MPAzRwy3-g0"
      },
      {
        cisloEn: "10.",
        stylEn: null,
        pouzijemeEn: "Pojistka, výplň",
        popisEn: "Bezpečnostní očko se dá zacvaknout tolikrát, kolik máme závitů na očku. Ovšem čím větší je pojistka a tenčí je příze, tím více je pojistka znatelná. Někdy nám pomáhá v optickém zkrášlení obličeje (jako mělo zvířátko najednou hezčí očka). </p><p>Chobotničku si musíme samozřejmě vyplnit. Takže popadněte vadu, duté vlákno, staré odstřižky a jdeme na to. S vyplňováním to nemusíte moc přehánět, aby se vám povedlo zapošití.",
        videoUrlEn: "dBmU8n4AfDg"
      },
      {
        cisloEn: "11.",
        stylEn: null,
        pouzijemeEn: "Jehla",
        popisEn: "Zašíváme tak, že si na jehlu navlečeme přízi, kterou jsme ukončovali. Tu budeme nejprve provlékat všemi oky typu A. Tímto krokem docílíme stažení. Ovšem pokud to někdo při plnění trochu přehnal, tak nám stále zůstává otvor. </p><p>Šití je podle mého názoru hodně individuální, proto je čistě na vás, zda budete šít podle mého vzoru, nebo si najedete vlastní styl. Každopádně hodně utahujte. </p><p>Nejdůležitější je však zakončení celé práce tak, aby se vám výrobek nerozpletl. Respektive to šití se nevyvléklo.",
        videoUrlEn: "IwOXPcn8H3E"
      },
      {
        cisloEn: "12.",
        stylEn: null,
        pouzijemeEn: "Jehla, nůžky",
        popisEn: "Zakončení probíhá následovně. Vyberu si nějaké nahodilé místo, kde s nití vyjedu (většinou na zádech tvorečka), zabořím se do očka vedle s tím, že vyjedu ve stejném oku jako poprvé. Nestáhnu to úplně, ale tak, aby mi zůstal malinký oblouček, kterým konec protáhneme a stáhneme. Vznikne uzlík a na jehle zůstane nit. Tu nahodile zasuneme do výrobku a vynoříme se nejlépe na druhé straně. </p><p>Jehlu můžeme zahodit a vezmeme si nůžky. Nitku napneme a co nejblíže výrobku ustřihneme.",
        videoUrlEn: "70BrpsQ4lzo"
      },
    ]
  },

  {
    nazevEn: "ruze",
    titleEn: "Rose",
    popisEn: "Vytvořme si společně okrasnou růži společně s listem.",
    pocetEn: "17",
    krokyEn: [
      {
        cisloEn: "1.",
        stylEn: null,
        pouzijemeEn: "Háček",
        popisEn: "Vytvoříme si základ pro tvoření řetízkového oka. Kolem ukazováčku a prostředníčku levé ruky obmotáme přízi. Položím na vnitřní stranu prstů a palcem přidržím, obtočím jednou, vytvořím na vnitřku kříž a rovnoběžně znovu obtočím kolem prstů. Přední nit podeberu spodem a druhou vrchem. Zaháknu se za ni a protáhnu ji přes tu první. ",
        videoUrlEn: "XL4ze9vLC3s"
      },
      {
        cisloEn: "2.",
        stylEn: "Řo",
        pouzijemeEn: "Háček",
        popisEn: "Teď máme na háčku vytvořený uzlík, nabereme přízi a protáhneme ji okem. Zase je jedno na háčku, naberu přízi a protáhnu. Takto celkem 27krát.",
        videoUrlEn: "jOlXPt2eARQ"
      },
      {
        cisloEn: "3.",
        stylEn: "Ds, Řo",
        pouzijemeEn: "Háček",
        popisEn: "Začneme odpočítáním třetího očka, a tam vytvoříme dlouhé sloupky, celkem 2 do jednoho oka. Přidáme řetízkové oko, které nám pomáhá vytvářet květy.",
        videoUrlEn: "X8WGTnnEC_A"
      },
      {
        cisloEn: "4.",
        stylEn: "Ds, Řo",
        pouzijemeEn: "Háček",
        popisEn: "Abychom vynahradili mezeru vzniklou řetízkovým okem, tak jedno oko na řetězu vynecháme. Další krok tedy bude ob jedno oko. 3 dlouhé sloupky do jednoho oka, řetízkové oko a takto pořád dokola, dokud nejsme na konci.",
        videoUrlEn: "Y_pbeKZayz8"
      },
      {
        cisloEn: "5.",
        stylEn: "Ds, Řo",
        pouzijemeEn: "Háček",
        popisEn: "Vytvoříme 2 řetízková oka, abych nám vznikla jakási nadstavba. Otočíme celý výrobek na druhou stranu (tzv. výrobek převrátíme) a pokračujeme druhou řadou.</p><p>Háčkujeme opakovaně dlouhý sloupek, do dalšího oka 2krát dlouhý sloupek, další oko opět jednou a 2 řetízková oka, která ukončíme v místě předešlého řetízkového očka z kroku 3 a 4.</p><p>Konkrétně si můžete vybrat mezi krátkým sloupkem, nebo pevným očkem (obojí ukázáno na videu), rozdíl je ve stažení a tedy i mezeře mezi listy.",
        videoUrlEn: "i67kKrqFqRY"
      },
      {
        cisloEn: "6.",
        stylEn: "Ds, Řo",
        pouzijemeEn: "Háček",
        popisEn: "Pokračujeme stejným způsobem. 2 řetízková oka, nahodím, vytvořím dlouhý sloupek do dalšího oka, pak 2 dlouhé sloupky do jednoho, v dalším bude opět jedno a pak 2 řetízková oka, ukončena krátkým sloupkem, nebo pevným očkem v místě řetízkového očka předešlé řady.",
        videoUrlEn: "oPUgWP9Lglw"
      },
      {
        cisloEn: "7.",
        stylEn: "Řo, Ds, Po",
        pouzijemeEn: "Háček",
        popisEn: "Poslední lístek se dělá stejně, jako ty doposud, jediný rozdíl je v tom, že poslední dvojice řetízkových oček se ukončí 2 očka dolů po straně. </p><p>Po zakončení pevným okem, máme kytičku hotovou a můžeme ji jít točit a tvarovat.",
        videoUrlEn: "p-SBATchhlo"
      },
      {
        cisloEn: "8.",
        stylEn: null,
        pouzijemeEn: "Jehla",
        popisEn: "Růži se snažím smotat, co nejvíc to jde, aby jako růže vypadala. Hodně tahám a tlačím při rolování. Pak to musíme podchytit tím, že to zašijeme. Šití je podle mě intuitivní, takže je to čistě na vás, já jen ukazuju příklad toho, jak to dělám já.",
        videoUrlEn: "vO_Qf_xJh9w"
      },
      {
        cisloEn: "9.",
        stylEn: null,
        pouzijemeEn: "Jehla",
        popisEn: "Zakončení je vždy to nejdůležitější a dělá se to poměrně jednoduše. Když jsme spokojená s šitím a drží mi výrobek tvar, tak mohu zakončit. Vyberu si bod, ve kterém vyjedu jehlou a protáhnu nit. Následně bodnu do očka vedle mého místa výsunu a mířím do očka, z něhož vychází nit. Opatrně utahuju, ale ne moc, potřebujeme se dostat do onoho oka, co se tvoří.</p><p>Opět je to individuální, jak to uděláte a tohle je jenom můj příklad.",
        videoUrlEn: "vELtmQHUzOM"
      },
      {
        cisloEn: "10.",
        stylEn: "Řo",
        pouzijemeEn: "Háček",
        popisEn: "Počneme si list. Můžete jich mít libovolné množství, ale musíte se vrátit zpět k tomuto kroku, abyste mohli podle videí tvořit znova. </p><p>Uděláme 13 řetízkových ok.",
        videoUrlEn: "oqk38lrk-JQ"
      },
      {
        cisloEn: "11.",
        stylEn: "Ds",
        pouzijemeEn: "Háček",
        popisEn: "Odpočítám si 3 očka a do toho třetího udělám 2 DS. Další oko je pro mě obohaceno dlouhými sloupky s rozdílem toho, že místo jednoho nahození nastanou dvě. Je to pořád to samé. Do jednoho oka celkem 2 krát.",
        videoUrlEn: "StfiMAJ2POc"
      },
      {
        cisloEn: "12.",
        stylEn: "Ds",
        pouzijemeEn: "Háček",
        popisEn: "Stejně pokračuju i nadále s rozdílem toho, že do každého jednoho oka padne jeden dlouhý sloupek s dvojitým nahozením. Do následujících 3 oček.",
        videoUrlEn: "fxHwZU5r5fw"
      },
      {
        cisloEn: "13.",
        stylEn: "Ds, Pds",
        pouzijemeEn: "Háček",
        popisEn: "Do dvou po sobě jdoucích ok uděláme klasický dlouhý sloupek, jednou nahodím, dvakrát protáhnu. Pak polodlouhý, jednou nahodím a jednou protáhnu.",
        videoUrlEn: "ebjvvrVYHnI"
      },
      {
        cisloEn: "14.",
        stylEn: "Pds, Ks",
        pouzijemeEn: "Háček",
        popisEn: "Jeden krátký sloupek, do dalšího oka 3 a zase jedno. Potom děláme to samé, co na druhé straně akorát obráceně. Tak pojďme na to. Jeden polodlouhý sloupek prosím!",
        videoUrlEn: "Qf99mIRTvas"
      },
      {
        cisloEn: "15.",
        stylEn: "Ds",
        pouzijemeEn: "Háček",
        popisEn: "Dva klasické dlouhé sloupky, jedno nahození a dvě protažení. Potom třikrát dlouhý sloupek po dvou nahozeních a 3 protaženích. Dva krát do jednoho očka ten dlouhý sloupek o dvou nahozeních. Předposlední očko si ponese 3 dlouhé sloupky.",
        videoUrlEn: "KYN4iC1lsKA"
      },
      {
        cisloEn: "16.",
        stylEn: "Po, Řo, Ks",
        pouzijemeEn: "Háček",
        popisEn: "Pevným okem propojíme náš konec se začátkem výrobku a pokračujeme 3 řetízkovými očky. Výrobek otočím a udělám 2 krátké sloupky. Pak pevným okem zakončím a mám list i s malým stonkem. Ovšem není nutný a pokud se vám nelíbí, nemusí tam vůbec být.</p><p>List přišijeme k růži.",
        videoUrlEn: "Rt7hW4sszoo"
      },
      {
        cisloEn: "17.",
        stylEn: null,
        pouzijemeEn: "Jehla",
        popisEn: "Dá se zakončit poměrně neviditelně, uvnitř jednoho kvítku, jako je ve videu.",
        videoUrlEn: "0eHFJNXWfUw"
      },
    ]
  },

  {
    nazevEn: "zalozka",
    titleEn: "Záložka",
    popisEn: "Veselá záložka do knihy pro malé i velké.",
    pocetEn: "18",
    krokyEn: [
      {
        cisloEn: "1.",
        stylEn: "Mk",
        pouzijemeEn: "Háček",
        popisEn: "Začneme jedním z nejtěžších stylů, a to je magický kroužek. Buď ho můžete dělat jako já na videu, nebo si práci zjednodušit za pomoci 2 řetízkových ok a následného píchnutí 6krát do prvního oka.",
        videoUrlEn: "NOXIskqmC0Q"
      },
      {
        cisloEn: "2.",
        stylEn: "V",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Označíme si nějakým způsobem začátek řady. Já mám značkovače, ale vám může stačit i nit jiné příze. Rozháčkování je o tom, že dělám 2 krátké sloupky do každého jednoho oka. </p><p>První očko není vždycky úplně zřetelné a mnohdy se do něj nedá ani dostat, to je ovšem ovlivněno samotným utahováním. </p><p>Nit, kterou jsem kroužek stahovala, si držím stále pod výrobkem, abych mohla mírně utáhnout.",
        videoUrlEn: "8COmvVjuNCI"
      },
      {
        cisloEn: "3.",
        stylEn: "Ks, V",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Postupné rozháčkování. Přidáváme mezi rozháčkování krátké sloupky. V tomto případě to bude jeden krátký sloupek, rozháčkování. Celkem 6krát. Kontrolou vám může být přepočítání ok. Vždycky se zvyšuje počet o 6, pokud nejedeme zrovna rovné řady, tam se nic nemění.",
        videoUrlEn: "s61YbmAz8ig"
      },
      {
        cisloEn: "4.",
        stylEn: "Ks, V",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Pokračujeme v postupném rozháčkování, takže už vás asi napadne, že budeme postupovat 2 krátké sloupky, rozháčkování. Na konci celkem 24 oček. </p><p> Už na konci tohoto kroku vidíte, jak se naše kolečko plynule zvětšuje.",
        videoUrlEn: "Eu2U2H1vOsM"
      },
      {
        cisloEn: "5.",
        stylEn: "Ks, V",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Co asi bude dál? Ano, správně! 3 krátké sloupky a rozháčkování, zase celkem 6krát a nakonec bude 30 oček k napočítání.</p><p>Naposledy se rozšíříme. 4 krátké sloupky a rozháčkování. Celkem 6krát, z toho plyne, že nakonec bude 36 oček.",
        videoUrlEn: "Soz8p-_p0gk"
      },
      {
        cisloEn: "6., 7. a 8.",
        stylEn: "ks",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Následující 3 řady budou stejné. Skládat je budeme pouze z krátkých sloupků, čili rovných řad, abychom výrobku dali nějakou velikost.",
        videoUrlEn: "nFvPTp6DPl0"
      },
      {
        cisloEn: "9.",
        stylEn: "Ks, A",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Vytvořenou kopuli budeme teď stahovat, abychom z ní udělali kouli. Stejně jako existuje postupné rozháčkování, tak teď se seznámíme s postupným sháčkováním. To funguje úplně stejně, ale s opačným pořadím. Rozháčkování přidává krátké sloupky do mezer, sháčkování ubírá. </p><p>Takže teď nás čekají 4 krátké sloupky, sháčkování. Celkem 6krát a budeme očka zase po 6 odebírat. Závěr této řady bude vyjádřen 30 očky.",
        videoUrlEn: "qKeh_ILkgm4"
      },
      {
        cisloEn: "10.",
        stylEn: "Ks, A",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Tentokrát 3 krátké sloupky a stažení. Už v tomto bodě jde hezky vidět, jak se nám výrobek stahuje a tvaruje. </p><p>Pokud vlastníte bezpečnostní očka, tak je teď můžete přidat a upevnit. Já je budu pro tento okamžik háčkovat.",
        videoUrlEn: "eM3djYCpFu0"
      },
      {
        cisloEn: "11. a 12.",
        stylEn: "Ks, A",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Postupně pokračujeme dolů s počtem krátkých sloupků. Teď 2 krátké sloupky a stáhnu.</p><p>Stažení na 1 krátký sloupek a sháčkování. Po tomto kroku budeme hlavičku vyplňovat a pro vás s bezpečnostními očky je tohle poslední možnost je přidat. </p><p>Vyplníme výrobek vatou, dutým vláknem, zbytky přízí, nebo výplní ze starých polštářů.",
        videoUrlEn: "oXCrwIgnyfE"
      },
      {
        cisloEn: "13. ",
        stylEn: "A",
        pouzijemeEn: "Háček, značkovač",
        popisEn: "Když jsme s vyplněním spokojeni, tak jednoduše po dvojicích stáhneme všech 12 současných oček. Bodneme do dalšího oka, jako když se začíná další řada a uděláme pevné očko, ukončíme, necháme nit delší na zapošití.",
        videoUrlEn: "LRfLBApNgvQ"
      },
      {
        cisloEn: "14.",
        stylEn: null,
        pouzijemeEn: "Jehla, nůžky",
        popisEn: "Zašijeme kouli tak, aby zmizela díra uprostřed a projedeme ji tak, aby se nám schovaly veškeré nedokonalosti. Zapošijeme, zakončíme. Upravíme kouli.",
        videoUrlEn: "BP8IxCX-xR4"
      },
      {
        cisloEn: "15.",
        stylEn: "Mk, Po",
        pouzijemeEn: "Háček, nůžky",
        popisEn: "Vytvoříme si spolu oči. Pokud se vám nechce je háčkovat, můžete si vzít filc a vystřihnout i oči. Pokud vás to háčkování zatím baví, pojďte si je se mnou uháčkovat. Magický kroužek, stejně jako v prvním kroku.</p><p>Do prvního oka uděláme pevné očko. Vytvoříme jen takto malinká očko. Postup opakujeme a vytvoříme si druhé.",
        videoUrlEn: "SyGaT44H728"
      },
      {
        cisloEn: "16.",
        stylEn: null,
        pouzijemeEn: "Jehla, nůžky",
        popisEn: "Našijeme očka. Opět je to na vás, video jen ukazuje, jak bych to dělala já.",
        videoUrlEn: "7VhN_yctywY"
      },
      {
        cisloEn: "17.",
        stylEn: null,
        pouzijemeEn: "Jehla",
        popisEn: "Našijeme pusinku, a to buď opět nějak individuálně, nebo podle mého typu z videa. Samozřejmě můžete mít i jiný výraz. Smajlík může být smutný, naštvaný… prostě jaký chcete.",
        videoUrlEn: "7iNCCeg7G1Q"
      },
      {
        cisloEn: "18.",
        stylEn: "Řo, ks",
        pouzijemeEn: "Háček",
        popisEn: "Teď k tomu té záložce. Buď uděláme řetízkové oko, nebo jenom natáhneme provázek, nebo podle videa můžeme vytvořit širší pruh. Řetízková oka podle šířky, udělám si jedno navíc. Výrobek otočím a vracím se krátkými sloupky, na konci si udělám jedno řetízkové a zase se vracím sloupky zpět. Takto opakuju, dokud nemám vyhovující délku.",
        videoUrlEn: "c0hboILLyRI"
      },
      {
        cisloEn: "17.",
        stylEn: "Po",
        pouzijemeEn: "Háček, nůžky",
        popisEn: "Připevníme pás k hlavičce. Naberu oko z pásu a zároveň z hlavičky, pevným okem spojím. Na konci po, ustřihnu a zakončím.",
        videoUrlEn: "6mgPGFgQMCg"
      },
      {
        cisloEn: "18.",
        stylEn: "Řo",
        pouzijemeEn: "Háček",
        popisEn: "Druhý způsob je udělat si jenom jeden jednoduchý řetízek, který se pak jedním jednoduchým utažením připevní k hlavičce smajlíka.",
        videoUrlEn: "JF-W5Dk3IE0"
      },
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class VyukaService {


  constructor() {
  }

  public getVyrobekByNameCz(nameCz: string) {
    return poleVyrobkuCz.find(element => element.titleCz == nameCz);
  }

  public getVsechnyPomuckyCz(): Array<VyukaCz> {
    return poleVyrobkuCz;
  }

  public getKrokyCz(titleCz: string): Array<InfoVyukyCz> {
    let index = poleVyrobkuCz.findIndex(x => x.titleCz === titleCz);
    return poleVyrobkuCz[index].krokyCz;
  }



  public getVyrobekByNameEn(nameEn: string) {
    return poleVyrobkuEn.find(element => element.titleEn == nameEn);
  }

  public getVsechnyPomuckyEn(): Array<VyukaEn> {
    return poleVyrobkuEn;
  }

  public getKrokyEn(titleEn: string): Array<InfoVyukyEn> {
    let index = poleVyrobkuEn.findIndex(x => x.titleEn === titleEn);
    return poleVyrobkuEn[index].krokyEn;
  }

}
