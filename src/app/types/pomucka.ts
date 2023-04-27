export type Pomucka = {
  title: string,
  nazev: string,
  videoURL: any,
  kroky: Array<PopisPomucek>,
}

export type PopisPomucek = {
  popis: string,
  obrazek: string | null,
} 