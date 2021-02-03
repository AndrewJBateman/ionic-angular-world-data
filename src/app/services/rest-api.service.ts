import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import {
	CountryListInterface,
	CountryDetailInterface,
	Country,
} from '../interfaces/interface';

const apiUrl = 'https://restcountries.eu/rest/v2';

@Injectable({
	providedIn: 'root',
})
export class RestApiService {
	constructor(private httpClient: HttpClient) {}

	fetchCountryListData(url: string) {
		return this.httpClient.get<CountryListInterface[]>(`${apiUrl}/${url}`).pipe(
			take(1),
			catchError((error) => {
				return throwError('Countries not found, error:', error);
			})
		);
	}

	fetchCountryDetailData(country: string) {
		return this.httpClient
			.get<CountryDetailInterface[]>(`${apiUrl}/name/${country}?fullText=true`)
			.pipe(
				take(1),
				catchError((error) => {
					return throwError('Country not found', error);
				})
			);
	}

	fetchCountryByName(name: string): Observable<Country[]> {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');

		return this.httpClient
			.get<Country[]>(
				`https://restcountries.eu/rest/v2/name/${name}?fullText=true`,
				{
					headers,
				}
			)
			.pipe(
				take(1),
				catchError((error) => {
					return throwError('Country not found!', error);
				})
			);
	}
}
