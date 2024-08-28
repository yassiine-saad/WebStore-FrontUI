import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { Order } from "../models/order.model";
import { environment } from "../../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {

    private orderSubject$ = new BehaviorSubject<Order | null>(null);

    // private apiUrl = 'http://localhost:8080/api/v1'; // Remplacez URL_API par l'URL de votre API
    private apiUrl = environment.apiUrl
  
    constructor(private http: HttpClient) { }
  
    // getOrders(): Observable<any[]> {
    //   return this.http.get<any[]>(`${this.apiUrl}/orders`);
    // }

    // getOrders(filterCriteria?: any, page = 0, size =10): Observable<any[]> {
    //   let params = new HttpParams();
  
    //   params = params.set('page', page.toString())
    //   params = params.set('size', size.toString());
  
    //   if (filterCriteria) {
    //     if (filterCriteria.name) {
    //       params = params.set('name', filterCriteria.name);
    //     }
    //     if (filterCriteria.minPrice) {
    //       params = params.set('minPrice', filterCriteria.minPrice.toString());
    //     }
    //     if (filterCriteria.maxPrice) {
    //       params = params.set('maxPrice', filterCriteria.maxPrice.toString());
    //     }
    //     if (filterCriteria.category) {
    //       params = params.set('category', filterCriteria.category);
    //     }
    //   }
  
    //   return this.http.get<any[]>(`${this.apiUrl}/orders`, { params })
    //     .pipe(
    //       // catchError(this.handleError) // Gérer les erreurs
    //     );
    // }
  





    getOrders(filterCriteria?: any, page = 0, size =10): Observable<any[]> {
      let params = new HttpParams();
  
      params = params.set('page', page.toString())
      params = params.set('size', size.toString());
  
      if (filterCriteria.status) {
        params = params.set('status', filterCriteria.status);
      }
      if (filterCriteria.orderDate) {
        params = params.set('orderDate', filterCriteria.orderDate);
      }
      if (filterCriteria.paymentMethod) {
        params = params.set('paymentMethod', filterCriteria.paymentMethod);
      }
      if (filterCriteria.deliveryMethod) {
        params = params.set('deliveryMethod', filterCriteria.deliveryMethod);
      }
      if (filterCriteria.orderNumber) {
        params = params.set('orderNumber', filterCriteria.orderNumber);
      }
      if (filterCriteria.userEmail) {
        params = params.set('userEmail', filterCriteria.userEmail);
      }
  
      return this.http.get<any[]>(`${this.apiUrl}/orders`, { params })
        .pipe(
          catchError(this.handleError) // Gérer les erreurs
        );
    }



    getOrderById(orderId: number): Observable<Order> {
      return this.http.get<Order>(`${this.apiUrl}/orders/${orderId}`);
    }

    // getOrderById(id: number): Observable<Order> {
    //   return this.http.get<Order>(`${this.apiUrl}/${id}`);
    // }
  
    updateOrder(order: any, orderId: number): Observable<Order> {
      console.log("order service",order)
      return this.http.put<Order>(`${this.apiUrl}/orders/${orderId}`, order);
    }

    
    // getOrders(): Observable<OrderModel[]> {
    // return this.http.get<any[]>(`${this.apiUrl}/orders`).pipe(
    // map((response: any[]) => {
    // return response.map(order => this.mapOrder(order));
    // })
    // );
    // }


    updateOrderStatus(orderId: number, newStatus: string): Observable<Order> {
      const url = `${this.apiUrl}/orders/${orderId}/status?status=${newStatus}`;
      return this.http.put<Order>(url, {}).pipe(
        tap(updatedOrder => {
          // Mettre à jour le BehaviorSubject avec les nouveaux détails de la commande
          this.orderSubject$.next(updatedOrder);
          }
        )
      );
    }



    private handleError(error: any): Observable<any> {
      console.error('An error occurred:', error); // Log de l'erreur
      throw error; // Renvoyer une erreur observable pour que le composant puisse la gérer
    }
  

  }