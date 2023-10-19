import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KmsService {
  private readonly kmsUrl = environment.kmsUrl;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getHttpOptions(): {headers: HttpHeaders} {
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
    return this.http.post(`${this.kmsUrl}/v1/auth/userpass/login/${id}`, {
      password: password,
    }, httpOptions);
  }

  renewToken(): Observable<any> {
    return this.http.post(`${this.kmsUrl}/v1/auth/token/renew-self`,
      this.getHttpOptions());
  }

  decryptData(id: string, encryptedData: string): Observable<any> {
    return this.http.post(`${this.kmsUrl}/v1/transit/decrypt/${id}`, {
      ciphertext: encryptedData,
    }, this.getHttpOptions());
  }

  encryptData(id: string, dataToEncrypt: string): Observable<any> {
    return this.http.post(`${this.kmsUrl}/v1/transit/encrypt/${id}`, {
      plaintext: dataToEncrypt,
    }, this.getHttpOptions());
  }

  encryptSignup(id: string, token: string, dataToEncrypt: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Vault-Token': `${token}`
      })
    };
    return this.http.post(`${this.kmsUrl}/v1/transit/encrypt/${id}`, {
      plaintext: btoa(dataToEncrypt),
    }, httpOptions);
  }
}
