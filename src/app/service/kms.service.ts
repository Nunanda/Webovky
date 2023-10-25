import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Observable, catchError, throwError, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KmsService {
  private readonly kmsUrl = environment.kmsUrl;
  private readonly timeoutDuration = 10000;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'X-Vault-Token': `${this.tokenService.getKmsToken()}`
      })
    }
  }

  userpassLogin(id: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const request = this.http.post(`${this.kmsUrl}/v1/auth/userpass/login/${id}`, {
      password: password,
    }, httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  renewToken(): Observable<any> {
    const request = this.http.post(`${this.kmsUrl}/v1/auth/token/renew-self`,
      this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  decryptData(id: string, encryptedData: string): Observable<any> {
    const request = this.http.post(`${this.kmsUrl}/v1/transit/decrypt/${id}`, {
      ciphertext: encryptedData,
    }, this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  encryptData(id: string, dataToEncrypt: string): Observable<any> {
    const request = this.http.post(`${this.kmsUrl}/v1/transit/encrypt/${id}`, {
      plaintext: dataToEncrypt,
    }, this.getHttpOptions());
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  encryptSignup(id: string, token: string, dataToEncrypt: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Vault-Token': `${token}`
      })
    };
    const request = this.http.post(`${this.kmsUrl}/v1/transit/encrypt/${id}`, {
      plaintext: btoa(dataToEncrypt),
    }, httpOptions);
    return request.pipe(
      timeout(this.timeoutDuration),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
