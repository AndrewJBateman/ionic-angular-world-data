import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryListInterface, CountryDetailInterface } from '../interfaces/interface';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class RestApiService {
	public apiUrl = 'https://restcountries.eu/rest/v2';
	// currentCountry: any;

	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	// fetch country list from API using url input
	getCountryListData(url: string) {
		return this.http.get<CountryListInterface>(`${this.apiUrl}/${url}`);
	}

	getCountryDetailData(url: string) {
		console.log(`${this.apiUrl}/${url}`);
		return this.http.get(`${this.apiUrl}/${url}`);
	}

	// get single country
  public getSingleCountry(country: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    // return this.http.get(
    //   `${this.apiUrl}/alpha/${country}?fields=name;capital;currencies;subregion;timezones;alpha3Code;population;area;flag;topLevelDomain;alpha2Code;altSpellings;region;borders;nativeName;languages;callingCodes`
		// );
		
		return this.http.get(
      `${this.apiUrl}/name/${country}?fullText=true`
    );
  }
}
