import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { CountryDetailInterface } from "../interfaces/interface";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private _storage: Storage | null = null;
  countries: CountryDetailInterface[] = [];

  constructor(private storage: Storage) {
    this.initStorage();
    this.loadFavourites();
  }

  // initialise storage IndexedDB/-ionicStorage/_ionickv
  async initStorage(): Promise<void> {
    let storage = await this.storage.create();
    this._storage = storage;
  }

  storeData(
    key: string,
    value: string | Array<CountryDetailInterface> | boolean
  ): void {
    try {
      this.storage?.set(key, value);
    } catch (err) {
      alert("Error storing data: " + err);
    }
  }

  async getStoredData(key: string): Promise<any> {
    try {
      return this.storage.get(key);
    } catch (err) {
      alert("Error getting stored data: " + err);
      return null;
    }
  }

  async clearStoredData(key: string): Promise<void> {
    try {
      return this.storage.remove(key);
    } catch (err) {
      alert("Error clearing stored data: " + err);
      return null;
    }
  }

  // check if country to be added to favourites is already in stored data
  // if not add new country to beginning of country array then store updated array
  async toggleCountryStore(country: CountryDetailInterface): Promise<Boolean> {
    let exists = false;
    for (const countr of this.countries) {
      if (countr.name["common"] === country.name["common"]) {
        exists = true;
        break;
      }
    }

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
  async loadFavourites(): Promise<CountryDetailInterface[] | []> {
    const storedCountries = await this.storage.get("favourites");
    this.countries = storedCountries || [];
    return this.countries;
  }

  // return true if country is in favourites, otherwise false
  async countryInFavourites(countryName: string): Promise<Boolean> {
    await this.loadFavourites();
    const exists = this.countries.find(
      (countr) => countr.name["common"] === countryName
    );
    return exists ? true : false;
  }
}
