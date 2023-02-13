import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, catchError, filter, map, retry, tap, throwError } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';


import { IUsuario, IUsuarioBean } from '../model/usuario-interface';


export enum Events {
  login,
  logout
}

export class EmitEvent {
  constructor(public event: Events, public token?: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  private entityURL = '/session';
  url: string = `${baseURL}${this.entityURL}`;
  subject = new Subject<EmitEvent>();

  constructor(
    private http: HttpClient,

  ) { }

  login(loginData: String): Observable<string> {
    if (environment) console.log("SessionService: login");
    return this.http.post<string>(this.url, loginData, httpOptions).pipe(
      tap((u: string) => console.log("session.service login HTTP request executed", u)),
      retry(1),
      catchError(this.handleError));
    }


  checkSession(): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.url, httpOptions);
  }


  logout(): Observable<string> {
    if (environment) console.log("SessionService: logout");
    return this.http.delete<string>(this.url, httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
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

  on(event: Events): Observable<String> {
    return this.subject.pipe(
        filter((e: EmitEvent) => {
            return e.event === event;
        }),
        map((e: EmitEvent) => {
            return e.token;
        })
    )
}

emit(event: EmitEvent) {
    this.subject.next(event);
}

}
