import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  totalPages!: number;
  totalElements!: number;
  currentPage!: number;
  pageSize!: number;


  orders!: Order[];
  orders$!: Observable<Order[]>

  filterForm!: FormGroup;


  displayedColumns: string[] = ['orderId', 'clientName', 'email', 'pickupMethod', 'paymentMethod', 'createdAt', 'status',"actions"];

  constructor(private orderService: OrderService, private router: Router, private fb: FormBuilder) { }

  // constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.pageSize = 5; // Taille de la page par défaut
    this.initFroms()
    this.getOrders();
  }

  getOrders(filters: any = {}): void {
    // this.orderService.getOrders().subscribe(orders => this.orders = orders);
    // this.orders$ = this.orderService.getOrders();
    this.orders$ = this.orderService.getOrders(filters,this.currentPage,this.pageSize).pipe(
      map((response: any) => {
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        return response.content; // Retourne la liste des clients
      })
    );
  }


  initFroms(): void{
    this.filterForm = this.fb.group({
      status: [''],
      orderDate: [''],
      paymentMethod: [''],
      deliveryMethod: [''],
      orderNumber: [''],
      userEmail: ['']
    });

    this.filterForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(values => {
      this.getOrders(values);
    });

  }






  viewOrder(order: Order): void {
    // this.orderService.getOrders()
    //   .subscribe(orders => this.orders = orders);
    this.router.navigate(['/admin/dashboard/orders', order.id]);
  }

  editOrder(order: Order): void {
    // // Implémentez la logique pour éditer la commande ici
    // console.log('Éditer la commande :', order);
    this.router.navigate(['/admin/dashboard/orders', order.id,'edit']);
  }

  deleteOrder(order: Order): void {
    // // Implémentez la logique pour supprimer la commande ici
    // console.log('Supprimer la commande :', order);
  }
  

  onPageChange(pageEvent: PageEvent): void {
    // this.currentPage = page;

    this.currentPage = pageEvent.pageIndex
    this.pageSize = pageEvent.pageSize
    this.getOrders()
    // this.reloadProducts()
    // console.log("event",pageEvent)
  }


  filterCriteria: any = {
    name: '',
    minPrice: null,
    maxPrice: null,
    category: null
  };


  resetFilters(): void {
    this.filterForm.reset({
      status: '',
      orderDate: '',
      paymentMethod: '',
      deliveryMethod: '',
      orderNumber: '',
      userEmail: ''
    });
  }



  
}












// export class OrderListComponent implements OnInit {
//   orders: Order[] = [];
//   filteredOrders: Order[] = [];
//   filterQuery: string = '';
//   selectedStatus: string = '';
//   totalOrders: number = 0;
//   pageSize: number = 10;
//   currentPage: number = 0;

//   constructor(private orderService: OrderService) { }

//   ngOnInit(): void {
//     this.fetchOrders();
//   }

//   fetchOrders(): void {
//     this.orderService.getOrders().subscribe(data => {
//       this.orders = data;
//       this.applyFilter();
//     });
//   }

//   applyFilter(): void {
//     this.filteredOrders = this.orders.filter(order =>
//       (!this.filterQuery || 
//        order.user.firstName.includes(this.filterQuery) || 
//        order.user.lastName.includes(this.filterQuery) || 
//        order.paymentMethod.includes(this.filterQuery) || 
//        order.deliveryMethod.includes(this.filterQuery) || 
//        order.user.email.includes(this.filterQuery)) &&
//       (!this.selectedStatus || order.status === this.selectedStatus)
//     );
//     this.totalOrders = this.filteredOrders.length;
//   }

//   clearFilters(): void {
//     this.filterQuery = '';
//     this.selectedStatus = '';
//     this.applyFilter();
//   }

//   viewOrderDetails(order: Order): void {
//     // Implement view order details logic
//   }

//   onPageChange(event: any): void {
//     this.currentPage = event.pageIndex;
//     this.pageSize = event.pageSize;
//     // Fetch new page of orders if needed
//   }
// }