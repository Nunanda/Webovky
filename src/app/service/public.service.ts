import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, TimeoutError, catchError, throwError, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Language } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private readonly apiUrl = environment.apiUrl;
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private readonly timeoutDuration = 10000;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/login`, {
      email,
      password
    }, this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  refreshToken(token: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/refresh-token`, {
      token
    }, this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  signup(email: string, username: string, password0: string, password1: string, language: Language, darkmode: boolean, kekSalt: string, initializationVector: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/signup`, {
      email,
      username,
      password0,
      password1,
      language,
      darkmode,
      kekSalt,
      initializationVector
    }, this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  saveWrappedDEK(token: string, wrappedDEK: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/save-Wrapped-DEK`, {
      token,
      wrappedDEK
    }, this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  verifyEmail(token: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/verify-email`, {
      token
    }, this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  sendPasswordChange(email: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/send-password-change`, {
      email
    }, this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  changePassword(token: string, password0: string, password1: string): Observable<any> {
    const request = this.http.post(`${this.apiUrl}/password-change`, {
      token,
      password0,
      password1
    }, this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getUsers(limit: number = 10, offset: number = 0): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/users?limit=${limit}&offset=${offset}`,
      this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getUserDetail(userId: number): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/user-detail/${userId}`,
      this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getFollowers(userId: number, limit: number = 10, offset: number = 0): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/users/${userId}/followers?limit=${limit}&offset=${offset}`,
      this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getFollowees(userId: number, limit: number = 10, offset: number = 0): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/users/${userId}/followees?limit=${limit}&offset=${offset}`,
      this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getPublicInstructions(limit: number = 10, offset: number = 0): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/public-instructions?limit=${limit}&offset=${offset}`,
      this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getPremiumInstructions(limit: number = 10, offset: number = 0): Observable<any> {
    const request = this.http.get(`${this.apiUrl}/premium-instructions?limit=${limit}&offset=${offset}`,
      this.httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}