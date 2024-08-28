import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from '../../services/user-orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent implements OnInit {

  orders: any[] = [];
  displayedColumns: string[] = ['orderNumber', 'orderDate', 'status', 'paymentMethod', 'deliveryMethod', 'total', 'actions'];

  constructor(private userOrdersService: UserOrdersService,private router: Router) { }

  ngOnInit(): void {
    this.loadUserOrders();
  }

  loadUserOrders(): void {
    this.userOrdersService.getUserOrders().subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        alert('Erreur lors de la récupération des commandes');
      }
    );
  }

  getTotal(order: any): number {
    return order.items.reduce((sum: number, item: any) => sum + (item.productPrice * item.quantity), 0);
  }


  viewOrderDetails(order: any): void {
    this.router.navigate(['shop/my-orders', order.id]);
  }

}
