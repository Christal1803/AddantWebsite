import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _urlToRequest: string = environment.apiUrl;
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6IjEiLCJleHAiOjE2NzI2OTc0Mzh9.08WMAY0C2-xc08DvAgcuKOSaaX4o-DWgn4plQ6zW9rs' })
  };
  constructor(private http: HttpClient) { }

  saveEnquiry(enquiryBody: any,): Observable<Boolean> {
    try {
      return this.http.post(`${this._urlToRequest}/api/Enquiry/Create`, enquiryBody, this._httpOptions).pipe(
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



  savejob(jobBody: any,): Observable<Boolean> {
    try {
      return this.http.post(`${this._urlToRequest}api/Candidate/compose`, jobBody, this._httpOptions).pipe(
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

  getBlogDetail(): Observable<Boolean> {
    try {
      return this.http.get(`${this._urlToRequest}/api/Blog/Detail`, this._httpOptions).pipe(
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
  
  getBlogDetailByID(id: string): Observable < Boolean > {
  try {
    return this.http.get(`${this._urlToRequest}api/Blog/Detail/${id}`, this._httpOptions).pipe(
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
  } catch(exception) {
    return of(false);
  }
  }

  
saveResume(resumeBody: any,): Observable < Boolean > {
  try {
    return this.http.post(`${this._urlToRequest}api/Candidate/compose`, resumeBody, this._httpOptions).pipe(
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
  } catch(exception) {
    return of(false);
  }
  }

  saveResumeImage(ResumeBodyImage: any,): Observable<Boolean> {
    try {
      return this.http.post(`${this._urlToRequest}api/Candidate/DocumentUpload/MediaUpload`, ResumeBodyImage).pipe(
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

  getPositionDetail(adminCall:any): Observable<Boolean> {
    try {
      return this.http.get(`${this._urlToRequest}api/Position?isAdminCall=${adminCall}
`, this._httpOptions).pipe(
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

getPostionById(id: any): Observable < Boolean > {
  try {
    return this.http.get(`${this._urlToRequest}/api/Position/${id}`, this._httpOptions).pipe(
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
  } catch(exception) {
    return of(false);
  }
  }


  getGallery(search: any, startDate: any, endDate: any): Observable<Boolean> {
    try {
      return this.http.get(`${this._urlToRequest}api/AddantLife?idAddantLife=${0}&isAdminCall=false&searchText=${search}&startDate=${startDate}&endDate=${endDate}`, this._httpOptions).pipe(
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

  getEventByID(eventId: any): Observable<Boolean> {
    try {
      return this.http.get(`${this._urlToRequest}api/AddantLife?idAddantLife=${eventId}`, this._httpOptions).pipe(
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

  getGalleryArray(id: any): Observable<Boolean> {
    try {
      return this.http.get(`${this._urlToRequest}api/AddantLife/Detail/Inner?idAddantLife=${id}&isAdminCall=false`, this._httpOptions).pipe(
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
