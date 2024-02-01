import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { environment } from "../../environments/environment";

import {
  CountryList,
  CountryDetail,
} from "../interfaces/country";

@Injectable({
  providedIn: "root",
})
export class RestApiService {
  private apiUrl: string = environment.API_URL;
  
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetches the list of countries from the API based on the provided URL.
   * Returns an observable of type CountryListInterface[].
   */
  fetchCountryListData(url: string): Observable<CountryList[]> {
    const countryListUrl: string = `${this.apiUrl}/${url}`;
    return this.httpClient.get<CountryList[]>(countryListUrl).pipe(
      take(1),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  /**
   * Fetches the details of a specific country from the API based on the provided country name.
   * Returns an observable of type CountryDetailInterface[].
   */
  fetchCountryDetailData(
    country: string
  ): Observable<CountryDetail[]> {
    const countryDetailUrl: string = `${this.apiUrl}/name/${country}?fullText=true`;
    return this.httpClient
      .get<CountryDetail[]>(countryDetailUrl)
      .pipe(
        take(1),
        catchError((err) => {
          return throwError(() => err);
        })
      )
  }
}
