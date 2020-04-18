import { Injectable } from '@angular/core';
import { QAdata } from './qadata';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private qaUrl = '/data/addquestionanswer';
  private questionUrl = '/data/askme';
  private statsUrl = '/data/tellmemore';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  sendQuestion(question: string) {
    return this.http.post(this.questionUrl, JSON.stringify({data: question}), this.httpOptions)
           .pipe(map(res => {
                  if (!res) {
                    throw new Error('Value expected!');
            }

            return res;
    }), catchError(this.handleError('sendQuestion')));
  }

  sendStatistics(statistics: QAdata) {
    console.log(JSON.stringify(statistics))
    return this.http.post(this.statsUrl, JSON.stringify(statistics), this.httpOptions)
           .pipe(map(res => {
                  if (!res) {
                    throw new Error('Value expected!');
            }

            return res;
    }), catchError(this.handleError('sendStatistics')));
  }

  addQAPair(qadata: QAdata): Observable<QAdata>  {
    return this.http.post<QAdata>(this.qaUrl, qadata, this.httpOptions)
           .pipe(catchError(this.handleError('addQAPair', qadata)));
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
