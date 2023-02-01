import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, catchError, retry, tap, throwError } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

import { IUsuario, IUsuarioBean } from '../model/usuario-interface';


@Injectable({
  providedIn: 'root'
})

export class SessionService {

  private entityURL = '/session';
  url: string = `${baseURL}${this.entityURL}`;
  subject = new Subject<void>();

  constructor(
    private http: HttpClient,

  ) { }

  login(loginData: String): Observable<String> {
    if (environment) console.log("SessionService: login");
    return this.http.post<String>(this.url, loginData, httpOptions).pipe(
      tap((u: String) => console.log("session.service login HTTP request executed", u)),
      retry(1),
      catchError(this.handleError));
    }


  checkSession(): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.url, httpOptions);
  }


  logout(): Observable<String> {
    if (environment) console.log("SessionService: logout");
    return this.http.delete<String>(this.url, httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }


  reload() {
    this.subject.next();
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    }
    return throwError(errorMessage);
  }
}
