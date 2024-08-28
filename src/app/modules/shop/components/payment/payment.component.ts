import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { StripeService } from '../../services/stripe.service';
// import { Stripe, StripeCardElement, StripeElements, loadStripe } from '@stripe/stripe-js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
// export class PaymentComponent implements OnInit {

//   constructor(private paymentService: PaymentService, private stripeService: StripeService) { }

//   ngOnInit(): void { }

//   pay() {
//     this.paymentService.pay(5000); // Amount in cents
//   }


//   checkout() {
//     const data = {
//       priceId: 'price_id', // Remplacez par votre ID de prix Stripe
//       quantity: 1
//     };
//     this.stripeService.createCheckoutSession(data).subscribe((session: any) => {
//       this.stripeService.redirectToCheckout(session.id);
//     });
//   }
// }

// export class PaymentComponent implements OnInit, AfterViewInit {
//   private stripe: Stripe | null = null;
//   private elements: StripeElements | null = null;
//   private card: StripeCardElement | null = null;
//   loading = false;

//   constructor(private paymentService: PaymentService, private stripeService: StripeService) {}

//   ngAfterViewInit(): void {
    
//   }


//   async ngOnInit() {
//     this.stripe = await this.paymentService.getStripe();
//     if (this.stripe) {
//       this.elements = this.stripe.elements();
//       this.card = this.elements.create('card');
//       this.card.mount('#card-element');
//     }
//   }

//   async pay(event: Event) {
//     event.preventDefault();
//     this.loading = true;

//     if (!this.stripe || !this.card) {
//       return;
//     }

//     const { clientSecret }  = await this.paymentService.createPaymentIntent(500);

//     const { error, paymentIntent } = await this.stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: this.card,
//         billing_details: {
//           name: 'yassine saad',
//         },
//       },
//     });

//     this.loading = false;

//     if (error) {
//       console.error(error.message);
//     } else if (paymentIntent && paymentIntent.status === 'succeeded') {
//       console.log('Payment successful!');
//       console.log(paymentIntent);
//     }


//   }
// }



export class PaymentComponent implements OnInit {

  // @Input() stripe: Stripe | null = null;
  // @Input() card: any;
  paymentForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private paymentService: PaymentService) {}

  ngOnInit(): void {

    this.paymentForm = this.fb.group({
      name: ['', Validators.required]
    });

    // this.initializeStripe();
  }

  async initializeStripe() {
    // this.stripe = await this.paymentService.getStripe();
    // const elements = this.stripe?.elements();
    // if (elements) {
    //   this.card = elements.create('card');
    //   this.card.mount('#card-element');
    // }
  }



  async handlePayment() {
    // if (this.paymentForm.invalid) {
    //   this.snackBar.open('Veuillez remplir tous les champs requis', 'Fermer', { duration: 3000 });
    //   return;
    // }
    // const { name } = this.paymentForm.value;
    // const { paymentMethod, error } = await this.stripe!.createPaymentMethod({
    //   type: 'card',
    //   card: this.card,
    //   billing_details: { name }
    // });

    // if (error) {
    //   this.snackBar.open(error.message!, 'Fermer', { duration: 3000 });
    // } else {
    //   this.snackBar.open('Paiement réussi!', 'Fermer', { duration: 3000 });
    //   // Envoyez paymentMethod.id à votre backend pour créer une intention de paiement
    // }
  }



  async pay(event: Event) {
    // event.preventDefault();
    // this.loading = true;
    // if (!this.stripe || !this.card) {
    //   return;
    // }

    // // if (this.paymentForm.invalid) {
    // //   this.snackBar.open('Veuillez remplir tous les champs requis', 'Fermer', { duration: 3000 });
    // //   return;
    // // }
    // const { name } = this.paymentForm.value;
    // const { clientSecret }  = await this.paymentService.createPaymentIntent(500);
    // const { error, paymentIntent } = await this.stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: this.card,
    //     billing_details: {
    //       name: "name",
    //     },
    //   },
    // });
    // this.loading = false;
    // if (error) {
    //   console.error(error.message);
    // } else if (paymentIntent && paymentIntent.status === 'succeeded') {
    //   this.snackBar.open('Paiement réussi!', 'Fermer', { duration: 3000 });
    //   console.log('Payment successful!');
    //   console.log(paymentIntent);
    // }
  }

  
}