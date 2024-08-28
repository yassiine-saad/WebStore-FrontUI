import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
// import { environment } from '../../environments/environment';

@Injectable()
export class UserOrdersService {
//   private apiUrl = `${environment.apiUrl}/orders`;
 
    // private apiUrl = 'http://localhost:8080/api/v1'
    private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getUserOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orders/me`);
  }
}
