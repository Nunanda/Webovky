export type Vyuka = {
    title: string;
    nazev: string,
    popis: string,
    pocet: string,
    kroky: Array<InfoVyuky>
}

export type InfoVyuky = {
    cislo: string,
    styl: string | null,
    pouzijeme: string,
    popis: string,
    videoUrl: string
}