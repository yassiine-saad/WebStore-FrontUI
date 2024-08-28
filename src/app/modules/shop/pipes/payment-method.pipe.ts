import { Pipe, PipeTransform } from '@angular/core';
import { PaymentMethod } from '../enums/payment-method.enum';
// import { PaymentMethod } from './payment-method.enum';

@Pipe({
  name: 'paymentMethod'
})
export class PaymentMethodPipe implements PipeTransform {

  private methodMap = new Map<PaymentMethod, string>([
    [PaymentMethod.PayPal, 'PayPal'],
    [PaymentMethod.CreditCard, 'Carte de crédit'],
    [PaymentMethod.BankTransfer, 'Virement bancaire'],
    [PaymentMethod.CashOnDelivery, 'Paiement à la livraison']
  ]);

  transform(value: PaymentMethod): string {
    return this.methodMap.get(value) || value;
  }
}
