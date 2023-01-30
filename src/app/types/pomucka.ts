export type Pomucka = {
  nazev: string,
  titulek: string,
  kroky: Array<PopisPomucek>,
  videoURL: any,
}

export type PopisPomucek = {
  popis: string,
  obrazek: string | null,
  exist: boolean,
} 