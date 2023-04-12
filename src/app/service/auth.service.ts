import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, passwordHash: string): Observable<any> {
    return this.http.post('https://minec.serveminecraft.net:3002/users/login', {
      email,
      passwordHash
    }, httpOptions);
  }

  register(email: string, username: string, password: string, language: Language): Observable<any> {
    return this.http.post('/api/signup', {
      email,
      password,
      username,
      language
    }, httpOptions);
  }
}
