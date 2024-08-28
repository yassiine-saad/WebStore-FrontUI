import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../enums/order-status.enum';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  private statusMap = new Map<OrderStatus, string>([
    [OrderStatus.Created, 'Créée'],
    [OrderStatus.Confirmed, 'Confirmée'],
    [OrderStatus.Shipped, 'Expédiée'],
    [OrderStatus.Delivered, 'Livré'],
    [OrderStatus.Cancelled, 'Annulée'],
    [OrderStatus.ReturnRequested, 'Demande de retour'],
    [OrderStatus.Returned, 'Retournée']
  ]);

  transform(value: OrderStatus): string {
    return this.statusMap.get(value) || value;
  }
}
