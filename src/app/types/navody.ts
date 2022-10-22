export type Navod =  {
  title: String,
  nazev: string,
  zkratky: string,
  pomucky: string,
  popisy: Array<Popis>,
  obtiznost: Obtiznost
}

export type Popis = {
  obrazek: boolean,
  nazevCasti: string,
  popis: string
}

export enum Obtiznost {
  tezky='tezky',
  stredni='stredni',
  lehky='lehky'
}