// format of initial response with only 4 fields to be fetched from API
export interface CountryList {
  name: Name;
  capital: string;
  region: string;
  flags: Flags;
}

export interface Name {
  common: string;
  nativeName: NativeName;
  official: string;
}

export interface NativeName {
  nameLanguage: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Flags {
  svg: string;
  png: string;
}

// format of response from Rest Countries API
export interface CountryDetail {
  altSpellings: string[];
  area: number;
  borders: string[] | null;
  capital: string[];
  capitalInfo: { latlng: [number, number] };
  car: Car;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArma: {
    svg: string;
    png: string;
  };
  continents: string[];
  currencies: Currencies;
  demonyms: Demonyms;
  fifa: string;
  flag: string;
  flags: Flags;
  gini: Gini;
  idd: Idd;
  independent: boolean;
  landlocked: boolean;
  languages: Languages;
  latlng: [number, number];
  maps: Maps;
  name: Name;
  population: number;
  postalCode: {
    format: string;
    regex: string;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: { [key: string]: Translation };
  unMember: boolean;
}

export interface Car {
  signs: string[];
  side: 'right' | 'left';
}

export interface Currencies {
  currency: Currency;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Gini {
  "year": number;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  language: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}
