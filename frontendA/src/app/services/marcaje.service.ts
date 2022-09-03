import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class MarcajeService {

  private apiURL = "http://127.0.0.1:8000/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.apiURL + '/usuario')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.apiURL + '/usuario', JSON.stringify(usuario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.apiURL + '/usuario/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.apiURL + '/usuario/' + id, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<Usuario>(this.apiURL + '/usuario/' + id, this.httpOptions)
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