import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
// import { loadStripe } from '@stripe/stripe-js';
import { PaymentService } from '../../services/payment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { environment } from '../../environments/environment';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent implements OnInit {
  @Input() user!: any;
  @Input() amount!: number;
  @Output() paymentSuccess = new EventEmitter<any>();
  @Output() paymentFailure = new EventEmitter<any>();

  stripe: any;
  elements: any;
  card: any;

  loading = false;
  constructor(
    private paymentService: PaymentService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // this.stripe = await loadStripe('pk_test_51PMuIFFu0xChmaCeshoT260YnwqGn8dJIY4ZiOF25Enbvct02MUCsip7ouTayGqe476LRYw3iUueUgfUBpzJgKZG00hvUki1zR');
    // const elements = this.stripe.elements();
    // this.card = elements.create('card');
    // this.card.mount('#card-element');
  }

  async handleForm(event: Event) {
    // event.preventDefault();
    // const { paymentMethod, error } = await this.stripe.createPaymentMethod({
    //   type: 'card',
    //   card: this.card,
    // });

    // if (error) {
    //   this.paymentFailure.emit(error);
    // } else {
    //   this.paymentSuccess.emit(paymentMethod);
    // }
  }

  async processPayment() {
    // if (!this.stripe || !this.card) {
    //   return;
    // }

    // const { clientSecret }  = await this.paymentService.createPaymentIntent(this.convertEurosToCents(this.amount));
    // const { error, paymentIntent } = await this.stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: this.card,
    //     billing_details: {
    //       name: this.user.name,
    //       email: this.user.email,
    //       address: {
    //         // line1: this.user.address.line1,
    //         // city: this.user.address.city,
    //         // state: this.user.address.state,
    //         // postal_code: this.user.address.postal_code,
    //       },
    //     },
    //   },
    // });

    // this.loading = false;

    // if (error) {
    //   console.error(error.message);
    //   this.paymentFailure.emit(error);
    // } else if (paymentIntent && paymentIntent.status === 'succeeded') {
    //   this.snackBar.open('Paiement réussi!', 'Fermer', { duration: 3000 });
    //   console.log('Payment successful!');
    //   console.log(paymentIntent);
    //   this.paymentSuccess.emit(paymentIntent);
    // }
    
  }

  convertEurosToCents(euros: number): number {
    return Math.round(euros * 100);
  }
  

}
