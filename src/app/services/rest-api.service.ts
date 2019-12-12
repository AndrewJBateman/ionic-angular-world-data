import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { CountryListInterface, CountryDetailInterface, Country } from '../interfaces/interface';

const apiUrl = 'https://restcountries.eu/rest/v2';

@Injectable({
	providedIn: 'root'
})

export class RestApiService {
	constructor(
		private httpClient: HttpClient,
	) { }

	fetchCountryListData(url: string) {
    return this.httpClient.get(
      `${apiUrl}/${url}`
      ).pipe(
        map((data: CountryListInterface[]) => {
          return data;
        }), catchError( error => {
          return throwError( 'Countries not found' );
        })
      )
	}
  fetchCountryDetailData(country: string) {
    console.log('here is the API input', country);
    return this.httpClient.get(`${apiUrl}/name/${country}?fullText=true`).pipe(
        map((data: CountryDetailInterface[]) => {
          console.log('data from single country API call', data)
          return data;
        }), catchError( error => {
          return throwError( 'Country not found' );
        })  
      )
  }
	// fetch country detail from API using country name input
	// getCountryDetailData(country: string): Observable<CountryDetailInterface> {	
	// 	return this.httpClient.get<CountryDetailInterface>(
  //     `${apiUrl}/name/${country}?fullText=true`
  //   );
  // }

  fetchCountryByName(name: string): Observable<Country[]>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    
    return this.httpClient.get(
      `https://restcountries.eu/rest/v2/name/${name}?fullText=true`, 
       {headers: headers}
      ).pipe(
           map((data: Country[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Capital not found!' );
           })
        )
    }
}
