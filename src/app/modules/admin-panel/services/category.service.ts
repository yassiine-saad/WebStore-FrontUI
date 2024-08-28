import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '../../../../environments/environment.development';

@Injectable()
export class CategoryService {
  // private apiUrl = 'http://localhost:8080/api/v1/categories'; // Remplacez cela par l'URL de votre API
  private apiUrl = environment.apiUrl + '/categories'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }


  postCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category)
      .pipe(
        catchError(this.handleError) // Gérer les erreurs
      );
  }

  // Méthode pour gérer les erreurs HTTP
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error); // Log de l'erreur
    throw error; // Renvoyer une erreur observable pour que le composant puisse la gérer
  }
  

  addCategory(category: Partial<Category>): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

}
