// export interface Auth {
// }


// src/app/auth/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('token');
//     if (token) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }
//     return next.handle(req);
//   }
// }


export class AuthInterceptor implements HttpInterceptor {

  // Tableau pour stocker les routes et les méthodes autorisées sans auth
  publicRoutes: { url: string, method: string }[] = [
    { url: 'http://localhost:8080/api/v1/products', method: 'GET' },
    { url: 'http://localhost:8080/api/v1/products/:id', method: 'GET' },
    { url: 'http://localhost:8080/api/v1/auth/:', method: 'POST' },
    { url: 'http://localhost:8080/api/v1/auth/:', method: 'GET' },
    { url: 'http://localhost:8080/api/v1/categories:', method: 'GET' },
    // Ajoutez d'autres routes et méthodes autorisées ici si nécessaire
  ];

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Vérifie si la route et la méthode de la demande sont autorisées sans authentification
    if (this.isPublicRoute(request.url, request.method)) {
      // Si c'est le cas, laissez passer la demande sans ajouter de jeton
      return next.handle(request);
    }

    // Sinon, ajoutez le jeton au header de la requête
    const token = localStorage.getItem('token');
    if (token) {
        request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          alert('A network error occurred. Please try again.');      // Display error message for status 0
        } else if (error.status === 401) {
          // Redirect to an error page for status 401
          // this.router.navigate(['/error-page'], { queryParams: { message: 'Unauthorized access. Please log in.' } });
          alert('Unauthorized access. Please log in.');
          // this.router.navigate(['/error-page'], { queryParams: { message: 'Unauthorized access. Please log in.' } });
        }  else if (error.status === 403) {
          // Display alert and then redirect to an error page for status 403
          alert('Forbidden access. You do not have permission to view this page.');
          // this.router.navigate(['/error-page'], { queryParams: { message: 'Forbidden access. You do not have permission to view this page.' } });
        } 
        
        // else {
        //   // Handle other HTTP errors
        //   alert(`An error occurred: ${error.message}`);
        // }
        console.log(error);
        return throwError(error);
      })
    );
  }





  private isPublicRoute(url: string, method: string): boolean {
    // Vérifie si la route et la méthode correspondent à une route publique
    // return this.publicRoutes.some(route => route.url === url && route.method === method);
    return this.publicRoutes.some(route => {
      const staticPartOfRoute = route.url.split('/:')[0]; // Obtenir la partie statique de l'URL
      return url.startsWith(staticPartOfRoute) && route.method === method;
  });
  }
}

// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   // Tableau pour stocker les routes et les méthodes autorisées sans auth
//   publicRoutes: { url: string, method: string }[] = [
//     { url: '/api/v1/products', method: 'GET' },
//     // Ajoutez d'autres routes et méthodes autorisées ici si nécessaire
//   ];

//   constructor() {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Vérifie si la route et la méthode de la demande sont autorisées sans authentification
//     if (this.isPublicRoute(request.url, request.method)) {
//       // Si c'est le cas, laissez passer la demande sans ajouter de jeton
//       return next.handle(request);
//     }

//     // Sinon, ajoutez le jeton au header de la requête
//     const token = 'votre_token'; // Remplacez par votre logique pour obtenir le token
//     const authRequest = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     return next.handle(authRequest);
//   }

//   private isPublicRoute(url: string, method: string): boolean {
//     // Vérifie si la route et la méthode correspondent à une route publique
//     return this.publicRoutes.some(route => route.url === url && route.method === method);
//   }
// }
