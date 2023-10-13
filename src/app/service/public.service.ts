import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
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

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      email,
      password
    }, this.httpOptions);
  }

  refreshToken(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh-token`, {
      token
    }, this.httpOptions);
  }

  signup(email: string, username: string, password0: string, password1: string, language: Language, darkmode: boolean, kekSalt: string, initializationVector: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, {
      email,
      username,
      password0,
      password1,
      language,
      darkmode,
      kekSalt,
      initializationVector
    }, this.httpOptions);
  }

  saveWrappedDEK(token: string, wrappedDEK: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-Wrapped-DEK`, {
      token,
      wrappedDEK
    }, this.httpOptions);
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-email`, {
      token
    }, this.httpOptions);
  }

  sendPasswordChange(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-password-change`, {
      email
    }, this.httpOptions);
  }

  changePassword(token: string, password0: string, password1: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/password-change`, {
      token,
      password0,
      password1
    }, this.httpOptions);
  }

  getUsers(limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/users?limit=${limit}&offset=${offset}`,
      this.httpOptions);
  }

  getUserDetail(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-detail/${userId}`,
      this.httpOptions);
  }

  getFollowers(userId: number, limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/followers?limit=${limit}&offset=${offset}`,
      this.httpOptions);
  }

  getFollowees(userId: number, limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/followees?limit=${limit}&offset=${offset}`,
      this.httpOptions);
  }

  getPublicInstructions(limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/public-instructions?limit=${limit}&offset=${offset}`,
      this.httpOptions);
  }

  getPremiumInstructions(limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/premium-instructions?limit=${limit}&offset=${offset}`,
      this.httpOptions);
  }
}