import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === "/prihlaseni" || state.url === "/registrace") {
      if (!this.tokenService.getToken() && !this.tokenService.getKmsToken()) {
        return true;
      } else if (this.tokenService.getToken() && this.tokenService.getKmsToken()) {
        this.router.navigate(['/profile']);
        return true;
      }
    } else if (state.url === "/profile") {
      if (this.tokenService.getToken() && this.tokenService.getKmsToken()) {
        return true;
      }
    }
    this.router.navigate(['/home']);
    return false;
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardService).canActivate(next, state);
}