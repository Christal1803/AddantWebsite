 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  [x: string]: any;
  private _urlToRequest: string = environment.apiUrl;
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private _http: HttpClient) { }
  getBlogDetail(): Observable<Boolean> {
    try {
      return this._http.get(`${this._urlToRequest}/api/Blog/Detail`, this._httpOptions).pipe(
        tap((response: any) => {
          if (response.success) {
            console.log("Valid response received from server");
            of(true);
          } else {
            of(false);
          }

        }),
        catchError(this.handleError<Boolean>())
      );
    } catch (exception) {
      return of(false);
    }
  }
  private handleError<T>() {
    return (error: any): Observable<boolean> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(false);
    };
  }
}
