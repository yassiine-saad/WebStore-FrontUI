import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { loadStripe } from '@stripe/stripe-js';
// import { Stripe } from '@stripe/stripe-js';

@Injectable()
export class PaymentService {

  // private stripePromise = loadStripe('pk_test_51PMuIFFu0xChmaCeshoT260YnwqGn8dJIY4ZiOF25Enbvct02MUCsip7ouTayGqe476LRYw3iUueUgfUBpzJgKZG00hvUki1zR');

  constructor(private http: HttpClient) { }

//   createPaymentIntent(amount: number) {
//     return this.http.post('http://localhost:8080/api/v1/api/payment/create-payment-intent', { amount });
//   }

  async pay(amount: number) {
    // const stripe = await this.stripePromise;
    // if (stripe) {
    //   const result:any = await this.createPaymentIntent(amount).toPromise();
    //   const clientSecret = result['clientSecret'];

    //   const { error } = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: stripe.elements().create('card'),
    //       billing_details: {
    //         name: 'Customer Name'
    //       },
    //     },
    //   });

    //   if (error) {
    //     console.error(error.message);
    //   } else {
    //     console.log('Payment successful');
    //   }
    // }
  }


  async createPaymentIntent(amount: number) {
    return this.http.post<any>('http://localhost:8080/api/v1/api/payment/create-payment-intent', { amount }).toPromise();
  }

  

  // async getStripe(): Promise<Stripe | null> {
  //   return this.stripePromise;
  // }


}
