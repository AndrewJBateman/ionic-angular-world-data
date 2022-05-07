// format of initial response with only 4 fields to be fetched from API
export interface CountryListInterface {
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
  aym: Translation;
  que: Translation;
  spa: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

interface Flags {
  svg: string;
  png: string;
}

// format of response from Rest Countries API
export interface CountryDetailInterface {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders:      string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini:         Gini;
  fifa:         string;
  car:          Car;
  flags:        Flags;
}

export interface Car {
  signs: string[];
  side:  string;
}

export interface Currencies {
  PEN: Pen;
}

export interface Gini {
  "2019": number;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  aym: string;
  que: string;
  spa: string;
}

export interface Maps {
  googleMaps:     string;
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

export interface Pen {
  name:   string;
  symbol: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: any[];
  otherNames: any[];
}

interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Country {
  name: string;
  capital: string;
  region: string;
  flag: string;
}
