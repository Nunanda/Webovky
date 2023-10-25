import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'fdf845fe-67ae-11ee-8c99-0242ac120002';
  private readonly TOKEN_KEY_KMS = '05a6a872-67af-11ee-8c99-0242ac120002';
  private readonly KEK = '7a617e9b-ad2f-4c03-b383-7b750227fa5b';

  constructor(private cookieService: CookieService) { }

  signOut(): void {
    this.cookieService.delete(this.TOKEN_KEY);
    this.cookieService.delete(this.TOKEN_KEY_KMS);
    this.cookieService.delete(this.KEK);
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

  saveKEK(KEK: string): void {
    this.cookieService.set(this.KEK, KEK);
  }

  getKEK(): string | null {
    return this.cookieService.get(this.KEK) || null;
  }
}
