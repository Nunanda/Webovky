import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.tokenService.getToken() && !this.tokenService.getKmsToken()) {
      return true;
    } else if ((this.tokenService.getToken() && this.tokenService.getKmsToken()) && (state.url === "/prihlaseni" || state.url === "/registrace")) {
      this.router.navigate(['profile']);
      return true;
    } else if ((this.tokenService.getToken() && this.tokenService.getKmsToken()) && state.url === "/profile") {
      return true;
    } else {
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardService).canActivate(next, state);
}