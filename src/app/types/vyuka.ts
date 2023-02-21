export type VyukaCz = {
    titleCz: string;
    nazevCz: string,
    popisCz: string,
    pocetCz: string,
    krokyCz: Array<InfoVyukyCz>
}

export type VyukaEn = {
    titleEn: string;
    nazevEn: string,
    popisEn: string,
    pocetEn: string,
    krokyEn: Array<InfoVyukyEn>
}

export type InfoVyukyCz = {
    cisloCz: string,
    stylCz: string | null,
    pouzijemeCz: string,
    popisCz: string,
    videoUrlCz: string
}

export type InfoVyukyEn = {
    cisloEn: string,
    stylEn: string | null,
    pouzijemeEn: string,
    popisEn: string,
    videoUrlEn: string
}