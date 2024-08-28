import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//   private apiUrl = 'https://api.example.com/categories'; // Remplacez par l'URL de votre API
  private apiUrl = environment.apiUrl + '/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
