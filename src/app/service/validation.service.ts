import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  
  validateRegister(email: string, password0: string, password1: string, username: string): boolean {
    return email.includes("@") && password0 === password1 && password0.length > 8 && username.length >= 4;
  }

  validatePassword(password0: string, password1: string): boolean {
    return password0 === password1 && password0.length > 8;
  }

  validateEmail(email: string): boolean {
    return email.includes("@");
  }
}
