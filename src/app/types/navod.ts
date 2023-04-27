export type Navod = {
  title: string,
  nazev: string,
  zkratky: string,
  pocet: number,
  obtiznost: ObtiznostNavodu
  popisy: Array<PopisNavodu>,
}

export type PopisNavodu = {
  obrazek: boolean,
  nazevCasti: string,
  titulekCasti: string,
  popis: Array<string>
}

export enum ObtiznostNavodu {
  tezky = 'tezky',
  stredni = 'stredni',
  lehky = 'lehky'
}