import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent {

  order!: Order;
  order$!:Observable<Order>

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrderDetail();
  }

  getOrderDetail(): void {
    const id = +this.route.snapshot.params['id'];
    // this.orderService.getOrder(id).subscribe(order => this.order = order);
    this.order$ = this.orderService.getOrderById(id);
  }


  getTotal(): number {
    return this.order.items.reduce((total, item) => total + (item.quantity * 4), 0);
  }

  confirmOrder(id?:number){

    // this.orderService.updateOrderStatus(id, 'shipped')
    // .subscribe(updatedOrder => {
    //   this.order = updatedOrder;
    //   // Gérer la réponse de mise à jour si nécessaire
    // });


    // this.orderService.updateOrderStatus(id, 'shipped').pipe(
    //   tap(value=> this.order = value)
    // ).subscribe()

    if(id){
      this.order$ = this.orderService.updateOrderStatus(id, 'CONFIRMED').pipe(
        tap(value=> alert(value))
      )
    }
    
  }

  cancelOrder(id?:number){

    if(id){
      this.order$ = this.orderService.updateOrderStatus(id, 'CANCELLED').pipe(
        tap(value=> alert(value))
      )
    }
    
  }

  markAsDelivered(id?:number){

    if(id){
      this.order$ = this.orderService.updateOrderStatus(id, 'DELIVERED').pipe(
        tap(value=> alert(value))
      )
    }

  }

  shipOrder(id?:number){

    if(id){
      this.order$ = this.orderService.updateOrderStatus(id, 'SHIPPED').pipe(
        tap(value=> alert(value))
      )
    }

  }

}
