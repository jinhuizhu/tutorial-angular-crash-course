import { Injectable } from '@angular/core';
import {Entry} from "./model/entry";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WeightEntriesService {
  constructor(private http: HttpClient) {
  }

  /**
   * Create a new WeightEntry.
   * @param entry
   */
  addEntry(entry: Entry) {
    return this.http.post('/api/entries', entry);
  }

  /**
   * Return all the weight entries from server.
   */
  getEntries() {
    return this.http.get<Entry[]>('/api/entries').pipe(
      // convert to valid js Dates
      map( entries => {
        return entries.map( e => {
          e.date = new Date(e.date);
          return e;
        });
      }),
      // sorting
      map( entries => {
        return entries.sort( (a:Entry, b: Entry) => {
          if (a.date > b. date) {
            return 1;
          } else if (a.date.getTime() === b.date.getTime()) {
            return 0;
          } else {
            return -1;
          }
        });
      })
    );
  }

  /**
   * Delete the weight entry with the given id.
   * @param id
   */
  deleteEntry(id: number): Observable<{}> {
    const url = `/api/entries/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
