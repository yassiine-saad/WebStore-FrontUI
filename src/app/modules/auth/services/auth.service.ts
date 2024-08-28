// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../environments/environment.development';


@Injectable()
export class AuthService {
  // private apiUrl = 'http://localhost:8080/api/v1/auth';
  private baseUrl = environment.apiUrl;
  private apiUrl = environment.apiUrl + '/auth'
  private authSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router,private jwtHelper: JwtHelperService) { }

  // login(credentials: { email: string, password: string }): Observable<any> {  // fonctionne bien
  //   return this.http.post(`${this.apiUrl}/authenticate`, credentials).pipe(
  //     tap((response: any) => {
  //       localStorage.setItem('token', response.token);
  //       this.authSubject.next(true);
  //     })
  //   );
  // }


  // login(credentials: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials).pipe(
  //     tap(response => {
  //       // const decodedToken = jwt_decode(response.token); // Décodez le token JWT
  //       // const role = decodedToken.authorities[0]; // Extrait le rôle du JWT payload
  //       localStorage.setItem('token', response.token);
  //       // localStorage.setItem('role', role);
  //     })
  //   );
  // }




  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      }),
      catchError(error => {
        // Gérer les erreurs de connexion, par exemple, afficher un message d'erreur
        // alert("error Auth");
        return of(error);
      })
    );
  }



  requestPasswordReset(email: string): Observable<any> {
    // const url = `${this.baseUrl}/user/api/requestPasswordReset`;
    const url = `${this.baseUrl}/user/api/requestPasswordReset?email=${email}`;
    return this.http.post(url, {});
  }






  register(user: { email: string, password: string, name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }


  activateAccount(code: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activate-account?token=${code}`,{});
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authSubject.next(false);
    this.router.navigate(['/login']);
  }

  // isAuthenticated(): Observable<boolean> {
  //   return this.authSubject.asObservable();
  // }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token || '');
  }


  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken.authorities[0];
  }


  getUsername(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken.sub;
  }

  getFullName(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken.fullName;
  }





  // Token methodes
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    return this.jwtHelper.isTokenExpired(token);
  }

  
  clearToken(): void {
    localStorage.removeItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

}
