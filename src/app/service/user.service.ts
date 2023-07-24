import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getProfile(token: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/users/{id}', { headers: { Authorization: `Bearer ` + token}}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  setProfile(token: string, user: JSON): Observable<any> {
    return this.http.put(environment.apiUrl + '/users/{id}', user, { headers: { Authorization: `Bearer ` + token}}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  delProfile(token: string): Observable<any> {
    return this.http.delete(environment.apiUrl + '/users/{id}', { headers: { Authorization: `Bearer ` + token}}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  getPicture(token: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/users/{id}/profilePictureGet', { responseType: 'blob', headers: { Authorization: `Bearer ` + token}}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  setPicture(token: string, formData: FormData): Observable<any> {
    return this.http.put(environment.apiUrl + '/users/{id}/profilePictureSet', formData, { headers: { Authorization: `Bearer ` + token}}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  delPicture(token: string): Observable<any> {
    return this.http.delete(environment.apiUrl + '/users/{id}/profilePictureDel', { responseType: 'blob', headers: { Authorization: `Bearer ` + token}}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred. Please try again later.');
      })
    );
  }
}
