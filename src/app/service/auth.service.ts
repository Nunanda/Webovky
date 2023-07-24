import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Language } from 'src/app/types';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, passwordHash: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/login', {
      email,
      passwordHash
    }, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  register(email: string, username: string, password: string, language: Language): Observable<any> {
    return this.http.post(environment.apiUrl + '/signup', {
      email,
      password,
      username,
      language
    }, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  emailVerify(token: string | null): Observable<any> {
    return this.http.post(environment.apiUrl + '/verify-email', {
      token
    }, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  passwdReset(token: string | null, password0: string, password1: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/password-change', {
      token,
      password0,
      password1
    }, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  sendPasswdResetEmail(email: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/send-password-change', {
      email
    }, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }
}
