import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CheckoutService } from '../../services/checkout.service';
import { PaymentService } from '../../services/payment.service';
// import { Stripe, StripeCardElement, StripeElements, loadStripe } from '@stripe/stripe-js';
import { PaymentComponent } from '../payment/payment.component';
import { CreditCardFormComponent } from '../credit-card-form/credit-card-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shop-checkout',
  templateUrl: './shop-checkout.component.html',
  styleUrl: './shop-checkout.component.css'
})
// export class ShopCheckoutComponent implements OnInit {

//   cartItems$ = this.cartService.items$;
//   checkoutForm!: FormGroup;

//   paymentMethods = [
//     { value: 'card', icon: 'credit_card', label: 'Carte de crédit' },
//     { value: 'paypal', icon: 'payment', label: 'PayPal' },
//     { value: 'cash', icon: 'attach_money', label: 'Espèces à la livraison' }
//   ];


//   constructor(
//     private cartService: CartService,
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private userService: UserService
//   ) { }


  

//   ngOnInit(): void {
//     this.checkoutForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phoneNumber: ['', Validators.required],
//       paymentMethod: ['', Validators.required],
//       pickupMethod: ['', Validators.required],
//       cardNumber: [''],
//       cardHolderName: [''],
//       address: [''],
//       city: ['']
//     });

//     this.loadUserInfo();
    
//   }

//   loadUserInfo(): void {
//     this.userService.getUserInfo().subscribe(user => {
//       this.checkoutForm.patchValue({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         phoneNumber: user.phoneNumber
//       });

//       this.checkoutForm.get('firstName')?.disable()
//       this.checkoutForm.get('lastName')?.disable()
//       this.checkoutForm.get('email')?.disable()
//       if (user.phoneNumber) {
//         this.checkoutForm.get('phoneNumber')?.disable()
//       } 
      
//     });
//   }


//   getTotal(cartItems:CartItem[]): number {
//     return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
//   }

//   onSubmit() {
//     if (this.checkoutForm.valid) {
//       console.log(this.checkoutForm.value);
//       this.router.navigate(['/confirmation']);
//     } else {
//       alert("form is not valid")
//     }
//   }

// }


export class ShopCheckoutComponent implements OnInit, OnDestroy,AfterViewInit {

  // stripe: Stripe | null = null;
  card: any;
  paymentForm!: FormGroup;
  loading = false;

  user: any;
  checkoutForm!: FormGroup;
  amountToPay: number = 50.00;
  cartItems$!: Observable<any[]>;
  paymentMethods = [
    { value: 'card', label: 'Carte de Crédit', icon: 'credit_card' },
    // { value: 'paypal', label: 'PayPal', icon: 'account_balance' },
    { value: 'cash', icon: 'attach_money', label: 'Espèces à la livraison' }
    // Ajoute d'autres méthodes de paiement si nécessaire
  ];

  countries = ['France', 'Belgique', 'Suisse', 'Canada', 'États-Unis']; // Liste des pays
  private destroy$ = new Subject<void>();

  // @ViewChild(PaymentComponent) cardpay!: PaymentComponent;
  @ViewChild(CreditCardFormComponent) creditCardFormComponent!: CreditCardFormComponent;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private userService: UserService,
    private checkoutService: CheckoutService,
    private router: Router,
    private paymentService: PaymentService,
    private snackBar: MatSnackBar,
  ) { }


  ngAfterViewInit(): void {
    // this.initializeStripe()
  }

 

  // async initializeStripe() {
  //   this.stripe = await this.paymentService.getStripe();
  //   const elements = this.stripe?.elements();
  //   if (elements) {
  //     this.card = elements.create('card');
  //     this.card.mount('#card-element');
  //   }
  // }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.items$;
    this.initForms();
    this.loadUserInfo();
  }


  initForms(): void {

    this.checkoutForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      pickupMethod: ['', Validators.required],
      address: [''],
      city: [''],
      country: [''],
      postalCode: ['']
    });


    this.checkoutForm.get('pickupMethod')?.valueChanges .pipe(takeUntil(this.destroy$)).subscribe(value => {
      if (value === 'card') {
        this.checkoutForm.get('address')?.setValidators([Validators.required]);
        this.checkoutForm.get('city')?.setValidators([Validators.required]);
        this.checkoutForm.get('country')?.setValidators([Validators.required]);
        this.checkoutForm.get('postalCode')?.setValidators([Validators.required]);
      } else {
        this.checkoutForm.get('address')?.clearValidators();
        this.checkoutForm.get('city')?.clearValidators();
        this.checkoutForm.get('country')?.clearValidators();
        this.checkoutForm.get('postalCode')?.clearValidators();
      }
      this.checkoutForm.get('address')?.updateValueAndValidity();
      this.checkoutForm.get('city')?.updateValueAndValidity();
      this.checkoutForm.get('country')?.updateValueAndValidity();
      this.checkoutForm.get('postalCode')?.updateValueAndValidity();
    });

    this.checkoutForm.get('paymentMethod')?.valueChanges .pipe(takeUntil(this.destroy$)).subscribe(value => {

      if (value === 'card') {
        // this.initializeStripe()
      } else {
        this.card = null;
      }

    });

  }


  
  loadUserInfo(): void {
    this.userService.getUserInfo().subscribe(user => {
      this.checkoutForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber
      });

      this.checkoutForm.get('firstName')?.disable()
      this.checkoutForm.get('lastName')?.disable()
      this.checkoutForm.get('email')?.disable()
      if (user.phoneNumber) {
        this.checkoutForm.get('phoneNumber')?.disable()
      } 

      this.user = user;
      
    });
  }



  cartItems! : any[];


  getTotal(cartItems: any[]): number {
    this.amountToPay = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    return this.amountToPay;
  }

  // onSubmit(): void {
  //   if (this.checkoutForm.valid) {
  //     const checkoutData = {
  //       ...this.checkoutForm.value,
  //       cartItems: this.cartItems$
  //     };
  //     // this.checkoutService.processCheckout(checkoutData).subscribe(response => {
  //     //   // Logique à exécuter après une commande réussie
  //     //   console.log('Commande réussie', response);
  //     // }, error => {
  //     //   // Logique à exécuter en cas d'erreur
  //     //   console.error('Erreur de commande', error);
  //     // });
  //   }
  // }


  onSubmit(event:Event): void {

    // this.cardpay.pay(event)
    // console.log(this.cardpay.card);

    this.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(cartItems => {

      if (cartItems.length == 0 && this.loading == false){
        // alert("le panier est vide !! ");
        this.snackBar.open('Le panier est vide !', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        return
      }

      this.loading = true;
      this.creditCardFormComponent.processPayment();

      if (this.checkoutForm.value.paymentMethod === 'card') {
        this.creditCardFormComponent.processPayment();
        this.cartItems = cartItems
      } else {
        console.log('Order validated with another payment method.');
        this.sendOrder(cartItems);
      }


      // if (this.checkoutForm.valid) {
      //   const checkoutData = this.prepareCheckoutData(cartItems);
      //   this.checkoutService.processCheckout(checkoutData).pipe(takeUntil(this.destroy$)).subscribe(response => {
      //     alert('Commande réussie')
      //     this.router.navigateByUrl('shop/order-confirmation');
      //     console.log('Commande réussie', response);
      //   }, error => {
      //     // Logique à exécuter en cas d'erreur
      //     console.error('Erreur de commande', error);
      //   });
      // }


    });
    
  }


  prepareCheckoutData(cartItems: any[]): any {
    const formValue = this.checkoutForm.value;

    const paymentMethod = formValue.paymentMethod === 'card' ? 'CREDIT_CARD' : 'PAYPAL';
    const deliveryMethod = formValue.pickupMethod === 'delivery' ? 'HOME_DELIVERY' : 'IN_STORE_PICKUP';

    let shippingAddress = '';
    if (formValue.pickupMethod === 'delivery') {
      shippingAddress = `${formValue.address}, ${formValue.city}, ${formValue.postalCode}, ${formValue.country}`;
    } else {
      shippingAddress = 'tiptech 114 rue paris, les lilas, 93260, France'; // Adresse du magasin
    }

    const items = cartItems.map(item => ({
      productId: item.product.id,
      quantity: item.quantity
    }));

    return {
      paymentMethod,
      deliveryMethod,
      shippingAddress,
      items
    };
  }

  sendOrder( cartItems : any[] ){
    if (this.checkoutForm.valid) {
      const checkoutData = this.prepareCheckoutData(cartItems);
      this.checkoutService.processCheckout(checkoutData).pipe(takeUntil(this.destroy$)).subscribe(response => {
        // alert('Commande réussie')
        this.router.navigateByUrl('shop/order-confirmation');
        console.log('Commande réussie', response);
      }, error => {
        // Logique à exécuter en cas d'erreur
        console.error('Erreur de commande', error);
      });
    }
  }

  onPaymentSuccess(paymentMethod: any) {
    this.loading = false;
    console.log('Payment Successful!', paymentMethod);
    this.sendOrder(this.cartItems);
  }

  onPaymentFailure(error: any) {
    this.loading = false;
    console.error('Payment Failed', error);
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}