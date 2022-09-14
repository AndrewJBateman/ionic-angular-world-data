import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, take } from "rxjs/operators";

import {
  CountryListInterface,
  CountryDetailInterface,
} from "../interfaces/interface";

const apiUrl = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: "root",
})
export class RestApiService {
  constructor(private httpClient: HttpClient) {}

  fetchCountryListData(url: string): Observable<CountryListInterface[]> {
    return this.httpClient.get<CountryListInterface[]>(`${apiUrl}/${url}`).pipe(
      take(1),
      catchError((error) => {
        return throwError(() => console.log("Countries not found!", error));
      })
    );
  }

  fetchCountryDetailData(
    country: string
  ): Observable<CountryDetailInterface[]> {
    return this.httpClient
      .get<CountryDetailInterface[]>(`${apiUrl}/name/${country}?fullText=true`)
      .pipe(
        take(1),
        catchError((error) => {
          return throwError(() => console.log("Country not found!", error));
        })
      );
  }
}
