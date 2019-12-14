import { Injectable } from '@angular/core';
import { QAdata } from './qadata';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private qaUrl = '/data/addquestionanswer'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addQAPair(qadata: QAdata): Observable<QAdata>  {
    return this.http.post<QAdata>(this.qaUrl, qadata, this.httpOptions)
    .pipe(
      catchError(this.handleError('addQAPair', qadata))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
