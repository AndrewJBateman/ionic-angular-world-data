import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { CountryListInterface, CountryDetailInterface, Country } from '../interfaces/interface';

const apiUrl = 'https://restcountries.eu/rest/v2';

@Injectable({
	providedIn: 'root'
})

export class RestApiService {
	constructor(
		private httpClient: HttpClient
	) { }

	fetchCountryListData(url: string) {
		return this.httpClient.get(
			`${apiUrl}/${url}`
		).pipe(
			map((data: CountryListInterface[]) => {
				return data;
			}), catchError(err => {
				return throwError('Countries not found, error:', err);
			})
		);
	}

	fetchCountryDetailData(country: string) {
		return this.httpClient.get(`${apiUrl}/name/${country}?fullText=true`).pipe(
			map((data: CountryDetailInterface[]) => {
				return data;
			}), catchError(error => {
				return throwError('Country not found');
			})
		);
	}

	fetchCountryByName(name: string): Observable<Country[]> {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');

		return this.httpClient.get(
			`https://restcountries.eu/rest/v2/name/${name}?fullText=true`,
			{ headers }
		).pipe(
			map((data: Country[]) => {
				return data;
			}), catchError(error => {
				return throwError('Capital not found!');
			})
		);
	}

}
