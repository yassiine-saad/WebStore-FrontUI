// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };




// src/app/auth/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  // canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
  //   return this.authService.isAuthenticated().pipe(
  //     take(1),
  //     map(isAuthenticated => {
  //       if (isAuthenticated) {
  //         return true;
  //       } else {
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //     })
  //   );
  // }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    return this.authService.isAuthenticated();
  }



}
