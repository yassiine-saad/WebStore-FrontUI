import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Stripe, loadStripe } from '@stripe/stripe-js';

@Injectable()
export class StripeService {
  // private stripePromise = loadStripe('pk_test_51PMuIFFu0xChmaCeshoT260YnwqGn8dJIY4ZiOF25Enbvct02MUCsip7ouTayGqe476LRYw3iUueUgfUBpzJgKZG00hvUki1zR'); // Remplacez par votre clé publique

  constructor(private http: HttpClient) {}

  createCheckoutSession(data: any) {
    return this.http.post('http://localhost:8080/api/v1/api/payment/create-checkout-session', data);
  }

  async redirectToCheckout(sessionId: string) {
    // const stripe = await this.stripePromise;
    // if (stripe) {
    //   const { error } = await stripe.redirectToCheckout({
    //     sessionId: sessionId,
    //   });

    //   if (error) {
    //     console.error('Stripe error:', error);
    //   }
    // }
  }



  async createPaymentIntent(amount: number) {
    // return this.http.post<{ clientSecret: string }>('/api/payment/create-payment-intent', { amount }).toPromise();
  }

  // async getStripe(): Promise<Stripe | null> {
  //   return this.stripePromise;
  // }
}
