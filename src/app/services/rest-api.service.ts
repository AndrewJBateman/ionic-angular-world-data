import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CountryListInterface, CountryDetailInterface } from '../interfaces/interface';
import { Observable } from 'rxjs';

const apiUrl = 'https://restcountries.eu/rest/v2';

@Injectable({
	providedIn: 'root'
})

export class RestApiService {

	constructor(
		private http: HttpClient,
	) { }

	// fetch country list from API using url input
	getCountryListData(url: string): Observable<CountryListInterface>{
		return this.http.get<CountryListInterface>(`${apiUrl}/${url}`);
	}

	// fetch country detail from API using country name input
	getCountryDetailData(country: string): Observable<CountryDetailInterface> {	
		return this.http.get<CountryDetailInterface>(
      `${apiUrl}/name/${country}?fullText=true`
    );
  }
}
