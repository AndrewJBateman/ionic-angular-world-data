import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryListInterface, CountryDetailInterface } from '../interfaces/interface';

const apiUrl = 'https://restcountries.eu/rest/v2';
@Injectable({
	providedIn: 'root'
})
export class RestApiService {
	currentCountry: any;
	// url: string;

	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	// fetch country list from API using url input
	getCountryListData(url: string) {
		return this.http.get<CountryListInterface>(`${apiUrl}/${url}`);
	}

	getCountryDetailData(url: string) {
		return this.http.get<CountryDetailInterface>(`${apiUrl}/${url}`)
	}
}
