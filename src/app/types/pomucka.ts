export type Pomucka = {
  nazev: string,
  title: string,
  kroky: Array<PopisPomucek>,
  videoURL: any,
}

export type PopisPomucek = {
  popis: string,
  obrazek: string | null,
  exist: boolean,
} 