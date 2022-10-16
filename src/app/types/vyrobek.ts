export type Vyrobek = {
    nazev: string,
    popis: string,
    pocet: string,
    kroky: Array<Popis>
}

export type Popis = {
    cislo: string,
    styl: string,
    pouzijeme: string
    popis: string
    videoUrl: string
  }