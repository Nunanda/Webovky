import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly TOKEN_KEY_KMS = 'auth_token_kms';

  constructor() { }

  signOut(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_KEY_KMS);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  saveKmsToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY_KMS, token);
  }

  getKmsToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY_KMS);
  }
}
