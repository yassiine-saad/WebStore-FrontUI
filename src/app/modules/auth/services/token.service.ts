// // token.service.ts
// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

// @Injectable()
// export class TokenService {
//   constructor(private jwtHelper: JwtHelperService) {}

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   isTokenExpired(): boolean {
//     const token = this.getToken();
//     if (!token) return true;
//     return this.jwtHelper.isTokenExpired(token);
//   }

  

//   clearToken(): void {
//     localStorage.removeItem('token');
//   }
// }
