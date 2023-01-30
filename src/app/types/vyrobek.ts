export type Vyrobek = {
    title: string;
    nazev: string,
    popis: string,
    pocet: string,
    kroky: Array<Info>
}

export type Info = {
    cislo: string,
    styl: string | null,
    pouzijeme: string,
    popis: string,
    videoUrl: string
}