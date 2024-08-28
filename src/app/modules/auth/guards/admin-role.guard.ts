// admin-role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const role = this.authService.getRole();
    if (role === 'ROLE_ADMIN') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
