import { Injectable } from '@angular/core';
import {Entry} from "./model/entry";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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
}
