export type Navod = {
  title: string,
  nazev: string,
  zkratky: string,
  pomucky: string,
  popisy: Array<PopisNavodu>,
  obtiznost: ObtiznostNavodu
}

export type PopisNavodu = {
  obrazek: boolean,
  zkratkyCasti: string | null,
  nazevCasti: string,
  titulekCasti: string,
  popis: Array<string>
}

export enum ObtiznostNavodu {
  tezky = 'tezky',
  stredni = 'stredni',
  lehky = 'lehky'
}