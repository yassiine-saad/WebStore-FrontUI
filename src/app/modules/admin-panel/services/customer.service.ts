// customer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { Customer, Customers } from '../models/customer.model';
import { environment } from '../../../../environments/environment.development';
// import { Customer } from './customer.model';

@Injectable()
export class CustomerService {


  // private apiUrl = 'http://localhost:8080/api/v1'; // Remplacez cette URL par l'URL de votre API
  private apiUrl = environment.apiUrl


  constructor(private http: HttpClient) { }

  


  getCustomers(page: number, pageSize: number): Observable<Customers> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', pageSize.toString());

    return this.http.get<Customer>(`${this.apiUrl}/users`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    throw error;
  }
 
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }


  getCustomerById(customerId: number): Observable<Customer> {
    const url = `${this.apiUrl}/users/${customerId}`;
    return this.http.get<Customer>(url);
  }


  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/users/${customer.id}`;
    return this.http.put<Customer>(url, customer);
  }


  deleteCustomer(customerId: number): Observable<void> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.delete<void>(url);
  }


  // applyFilter(): void {
  //   this.filteredOrders = this.orders.filter(order =>
  //     (!this.filterQuery || order.user.firstName.includes(this.filterQuery) || order.user.lastName.includes(this.filterQuery) || order.paymentMethod.includes(this.filterQuery) || order.deliveryMethod.includes(this.filterQuery) || order.user.email.includes(this.filterQuery)) &&
  //     (!this.selectedStatus || order.status === this.selectedStatus) &&
  //     (!this.productId || order.items.some(item => item.productId.toString() === this.productId)) &&
  //     (!this.username || (order.user.firstName + ' ' + order.user.lastName).includes(this.username))
  //   );
  //   this.totalOrders = this.filteredOrders.length;
  // }


}




