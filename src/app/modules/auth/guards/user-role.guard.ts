// user-role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { AuthService } from './auth.service';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const role = this.authService.getRole();
    if (role === 'ROLE_USER') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
