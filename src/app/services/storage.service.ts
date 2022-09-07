import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { Country } from "../interfaces/interface";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private _storage: Storage | null = null;
  countries: Country[] = [];

  constructor(private storage: Storage) {
    this.initStorage();
    this.loadFavourites();
  }

  // initialise storage DB
  async initStorage() {
    let storage = await this.storage.create();
    this._storage = storage;
  }

  storeData(key: string, value: string | boolean): void {
    try {
      this._storage?.set(key, value);
    } catch (err) {
      alert("Error storing data: " + err);
    }
  }

  async getStoredData(key: string) {
    try {
      return this._storage.get(key);
    } catch (err) {
      alert("Error getting stored data: " + err);
      return null;
    }
  }

  // check if country to be added to favourites is already in stored data
  // if not add new country to beginning of country array then store updated array
  async storeCountry(country: Country): Promise<Boolean> {
    let exists = false;

    for (const countr of this.countries) {
      if (countr.name === country.name) {
        exists = true;
        break;
      }
    }

    // if country already exists in favourites then filter it out
    // else add country to favourites then store updated favourites array
    if (exists) {
      this.countries = this.countries.filter(
        (countr) => countr.name == country.name
      );
    } else {
      this.countries.unshift(country);
    }

    this._storage.set("favourites", this.countries);
    console.log("storage was set with: ", this.countries);
    return !exists;
  }

  // load array of countries from storage to list on favourites page.
  async loadFavourites(): Promise<Country[] | []> {
    const storedCountries = await this.storage.get("countries");
    this.countries = storedCountries || [];
    return this.countries;
  }

  // return true if country is in favourites, otherwise false
  async countryInFavourites(countryName: string): Promise<Boolean> {
    await this.loadFavourites();
    const exists = this.countries.find((countr) => countr.name === countryName);
    console.log("exists: ", exists);
    return exists ? true : false;
  }
}
