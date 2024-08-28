import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrl: './user-order-details.component.css'
})
export class UserOrderDetailsComponent implements OnInit {

  order: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.loadOrderDetails(orderId);
  }

  loadOrderDetails(orderId: string | null): void {
    if (orderId) {
      this.userService.getUserOrderById(orderId).subscribe(
        order => {
          this.order = order;
          console.log(this.order);
        },
        error => {
          alert('Erreur lors de la récupération des détails de la commande');
        }
      );
    }
  }

  getTotal(order: any): number {
    return order.items.reduce((sum: number, item: any) => sum + (item.productPrice * item.quantity), 0);
    // order.items.reduce((sum, item) => sum + item.productPrice * item.quantity, 0)
  }


 
}
