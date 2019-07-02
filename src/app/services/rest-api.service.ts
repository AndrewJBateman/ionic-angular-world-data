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

	getCountryData(url) {
		console.log(url);
		return this.http.get(`${apiUrl}/${url}`);
	}

	// getCountry(country): Observable<string> {
	// 	return this.http.get<string>(this.nameUrl + 'country');
	// }

	/* 	private extractData(res: Response) {
		const body = res;
		return body || {};
	}

	private handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const err = error || '';
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throwError(errMsg);
	} */
}
