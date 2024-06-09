import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../core/data/auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard {
  constructor(private router: Router, private auth: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.authenticated) {
      this.router.navigateByUrl('/admin/auth');
      return false;
    }
    return true;
  }
}