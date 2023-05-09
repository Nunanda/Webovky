import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getProfile(token: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/users/{id}', { headers: { Authorization: `Bearer ` + token}});
  }

  setProfile(token: string, user: JSON): Observable<any> {
    return this.http.put(environment.apiUrl + '/users/{id}', user, { headers: { Authorization: `Bearer ` + token}});
  }

  delProfile(token: string): Observable<any> {
    return this.http.delete(environment.apiUrl + '/users/{id}', { headers: { Authorization: `Bearer ` + token}});
  }
}
