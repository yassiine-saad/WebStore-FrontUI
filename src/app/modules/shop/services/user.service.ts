import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:8080/api/v1'; // Remplacez par votre URL d'API
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

//   // Récupérer les informations de l'utilisateur
//   getUserInfo(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/users/me`);
//   }

//   // Mettre à jour les informations de l'utilisateur
//   updateUserInfo(userInfo: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}/users/update`, userInfo);
//   }


  getUserInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/me`);
  }

  updateUserInfo(userInfo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/me`, userInfo);
  }

  changePassword(passwordData: { oldPassword: string, newPassword: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/me/change-password`, passwordData);
  }

  getUserOrderById(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/orders/${orderId}`);
  }
}
