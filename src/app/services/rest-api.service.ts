import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catchError';
import 'rxjs/add/observable/throw';

@Injectable({
	providedIn: 'root'
})
export class RestApiService {
	apiUrl = 'https://restcountries.eu/rest/v2/all';

	constructor(private http: HttpClient) { }

	getCountries(): Observable<string> {
		return this.http.get<string>(this.apiUrl);
	}

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
