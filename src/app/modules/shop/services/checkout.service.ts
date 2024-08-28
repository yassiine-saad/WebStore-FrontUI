import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable()
export class CheckoutService {
  // private apiUrl = 'http://localhost:8080/api/v1/orders/place'; // Remplace par l'URL de ton API
  private apiUrl = environment.apiUrl + '/orders/place'

  constructor(private http: HttpClient) { }

  processCheckout(checkoutData: any): Observable<any> {
    console.log(checkoutData)
    return this.http.post<any>(this.apiUrl, checkoutData);
  }
}
