import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getProfile(token: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/users/{id}', { headers: { Authorization: `Bearer ` + token}});
  }

  setProfile(token: string, user: JSON): Observable<any> {
    return this.http.put(environment.apiUrl + '/users/{id}', user, { headers: { Authorization: `Bearer ` + token}});
  }

  delProfile(token: string): Observable<any> {
    return this.http.delete(environment.apiUrl + '/users/{id}', { headers: { Authorization: `Bearer ` + token}});
  }

  getPicture(token: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/users/{id}/profilePictureGet', { responseType: 'blob', headers: { Authorization: `Bearer ` + token}});
  }

  setPicture(token: string, formData: FormData): Observable<any> {
    return this.http.post(environment.apiUrl + '/users/{id}/profilePictureSet', formData, { headers: { Authorization: `Bearer ` + token}});
  }
}
