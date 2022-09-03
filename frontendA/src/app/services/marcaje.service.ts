import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Marcaje } from '../models/marcaje';
@Injectable({
  providedIn: 'root'
})
export class MarcajeService {

  private apiURL = "";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Marcaje[]> {
    return this.httpClient.get<Marcaje[]>(this.apiURL + '/marcaje')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(marcaje: Marcaje): Observable<Marcaje> {
    return this.httpClient.post<Marcaje>(this.apiURL + '/marcaje', JSON.stringify(marcaje), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: number): Observable<Marcaje> {
    return this.httpClient.get<Marcaje>(this.apiURL + '/marcaje/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, product: Marcaje): Observable<Marcaje> {
    return this.httpClient.put<Marcaje>(this.apiURL + '/marcaje/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<Marcaje>(this.apiURL + '/marcaje/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}