export type Vyrobek = {
    nazev: string,
    popis: string,
    pocet: string,
    kroky: Array<Info>
}

export type Info = {
    cislo: string,
    styl: string,
    pouzijeme: string,
    popis: string,
    videoUrl: string
  }