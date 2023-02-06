export type Navod = {
  title: string,
  nazev: string,
  zkratky: string,
  pomucky: string,
  popisy: Array<Popis>,
  obtiznost: Obtiznost
}

export type Popis = {
  obrazek: boolean,
  zkratkyCasti: string | null,
  nazevCasti: string,
  titulekCasti: string,
  popis: string
}

export enum Obtiznost {
  tezky = 'tezky',
  stredni = 'stredni',
  lehky = 'lehky'
}