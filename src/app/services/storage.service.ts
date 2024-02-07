import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { CountryDetail } from "../interfaces/country";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  countries: CountryDetail[] = [];

  constructor(private storage: Storage) {
    this.initStorage();
    this.loadFavourites();
  }

  // initialise storage IndexedDB/-ionicStorage/_ionickv
  async initStorage(): Promise<void> {
    this.storage = await this.storage.create();
  }

  storeData(
    key: string,
    value: string | Array<CountryDetail> | boolean
  ): void {
    this.storage?.set(key, value);
  }

  async getStoredData(key: string): Promise<any> {
    return this.storage.get(key);
  }

  async clearStoredData(key: string): Promise<boolean> {
    return this.storage.remove(key);
  }

  // check if country to be added to favourites is already in stored data
  // if not add new country to beginning of country array then store updated array
  async toggleCountryStore(country: CountryDetail): Promise<Boolean> {
    const exists = this.countries.some(
      (countr) => countr.name["common"] === country.name["common"]
    );

    // if country already exists in favourites then filter it out
    // else add country to favourites then store updated favourites array
    exists
      ? (this.countries = this.countries.filter(
          (countr) => countr.name["common"] !== country.name["common"]
        ))
      : this.countries.unshift(country);

    this.storage.set("favourites", this.countries);
    return !exists;
  }

  // load array of countries from storage to list on favourites page.
  async loadFavourites(): Promise<CountryDetail[] | []> {
    const storedCountries = await this.storage.get("favourites");
    this.countries = storedCountries || [];
    return this.countries;
  }

  // return true if country is in favourites, otherwise false
  async countryInFavourites(countryName: string): Promise<Boolean> {
    await this.loadFavourites();
    const exists = this.countries.some(
      (countr) => countr.name["common"] === countryName
    );
    return exists;
  }
}
