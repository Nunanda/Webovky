import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'fdf845fe-67ae-11ee-8c99-0242ac120002';
  private readonly TOKEN_KEY_KMS = '05a6a872-67af-11ee-8c99-0242ac120002';

  constructor(private cookieService: CookieService) { }

  signOut(): void {
    this.cookieService.delete(this.TOKEN_KEY);
    this.cookieService.delete(this.TOKEN_KEY_KMS);
  }

  saveToken(token: string): void {
    this.cookieService.set(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY) || null;
  }

  saveKmsToken(token: string): void {
    this.cookieService.set(this.TOKEN_KEY_KMS, token);
  }

  getKmsToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY_KMS) || null;
  }
}
