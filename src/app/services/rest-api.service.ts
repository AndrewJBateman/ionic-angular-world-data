import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

const apiUrl = 'https://restcountries.eu/rest/v2';
@Injectable({
	providedIn: 'root'
})
export class RestApiService {
	currentCountry: any;
	url: string;

	constructor(private http: HttpClient) { }

	// fetch country list from API using url input
	getCountryData(url: string) {
		return this.http.get(`${apiUrl}/${url}`);
	}

}
