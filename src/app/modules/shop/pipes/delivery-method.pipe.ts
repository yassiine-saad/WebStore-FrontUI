import { Pipe, PipeTransform } from '@angular/core';
import { DeliveryMethod } from '../enums/delivery-method.enum';
// import { DeliveryMethod } from './delivery-method.enum';

@Pipe({
  name: 'deliveryMethod'
})
export class DeliveryMethodPipe implements PipeTransform {

  private methodMap = new Map<DeliveryMethod, string>([
    [DeliveryMethod.HomeDelivery, 'Livraison à domicile'],
    [DeliveryMethod.InStorePickup, 'Ramassage en magasin']
  ]);

  transform(value: DeliveryMethod): string {
    return this.methodMap.get(value) || value;
  }
}
