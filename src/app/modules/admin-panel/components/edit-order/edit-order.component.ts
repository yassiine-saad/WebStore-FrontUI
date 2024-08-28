import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})

// export class EditOrderComponent implements OnInit {
//   editOrderForm!: FormGroup;
//   orderId!: number;
//   disabled = 'false';

//   constructor(
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private orderService: OrderService,
//     private snackBar: MatSnackBar
//   ) {
    
//   }

//   ngOnInit(): void {
//     this.orderId = this.route.snapshot.params['id'];
//     this.loadOrderDetails(this.orderId);

//     this.editOrderForm = this.fb.group({
//       orderNumber: [{ value: '', disabled: true }, Validators.required],
//       clientName: [{ value: '', disabled: true }, Validators.required],
//       clientEmail: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
//       shippingAddress: [{ value: '', disabled: false }, Validators.required],
//       paymentMethod: ['', Validators.required],
//       deliveryMethod: ['', Validators.required],
//       status: ['', Validators.required]
//     });

    
//     this.onDeliveryMethodChange();

//   }



//   onDeliveryMethodChange(): void {
//     this.editOrderForm.get('deliveryMethod')?.valueChanges.subscribe((value) => {
//       if (value === 'IN_STORE_PICKUP') {
//         this.editOrderForm.get('shippingAddress')?.disable();
//       } else {
//         this.editOrderForm.get('shippingAddress')?.enable();
//       }
//     });
//   }



  


//   loadOrderDetails(orderId: number): void {
//     this.orderService.getOrderById(orderId).subscribe((order: Order) => {
//       this.editOrderForm.patchValue({
//         orderNumber: order.orderNumber,
//         clientName: `${order.user.firstName} ${order.user.lastName}`,
//         clientEmail: order.user.email,
//         paymentMethod: order.paymentMethod,
//         deliveryMethod: order.deliveryMethod,
//         status: order.status,
//         shippingAddress: order.shippingAddress
//       });
//     });
//   }

//   // onSubmit(): void {
//   //   if (this.orderForm.valid) {
//   //     const updatedOrder = {
//   //       ...this.orderForm.getRawValue(),
//   //       id: this.orderId
//   //     };
//   //     this.orderService.updateOrder(updatedOrder).subscribe(() => {
//   //       this.router.navigate(['/orders']);
//   //     });
//   //   }
//   // }


//   onSubmit(): void {
//     // if (this.orderForm.valid) {
//     //   console.log(this.orderForm.value);
//     //   this.snackBar.open('Order updated successfully!', 'Close', {
//     //     duration: 3000
//     //   });
//     // } else {
//     //   this.snackBar.open('Please fill out the form correctly.', 'Close', {
//     //     duration: 3000
//     //   });
//     // }
//   }



//   onCancel(): void {
//     this.router.navigate(['/orders']);
//   }

// }



// export class EditOrderComponent implements OnInit {
//   editOrderForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.editOrderForm = this.fb.group({
//       orderNumber: [{ value: '', disabled: true }],
//       clientName: ['', Validators.required],
//       clientEmail: ['', [Validators.required, Validators.email]],
//       paymentMethod: ['', Validators.required],
//       deliveryMethod: ['', Validators.required],
//       status: ['', Validators.required],
//       shippingAddress: ['', Validators.required],
//       products: this.fb.array([])
//     });
//   }

//   ngOnInit(): void {
//     this.onDeliveryMethodChange();
//     this.loadOrderDetails(); // Load existing order details
//   }

//   get products(): FormArray {
//     return this.editOrderForm.get('products') as FormArray;
//   }

//   private loadOrderDetails() {
//     // Simulate loading order details
//     const order = {
//       orderNumber: 'CMD202405251',
//       clientName: 'Yassine Saad',
//       clientEmail: 'yassine.7.saad@gmail.com',
//       paymentMethod: 'PAYPAL',
//       deliveryMethod: 'HOME_DELIVERY',
//       status: 'CREATED',
//       shippingAddress: '114 rue Paris, Les Lilas, 93260, France',
//       products: [
//         { id: 1, productName: 'Dell XPS 13', quantity: 1, productPrice: 999.99 },
//         { id: 2, productName: 'Apple iPhone 12', quantity: 2, productPrice: 799.99 }
//       ]
//     };

//     this.editOrderForm.patchValue(order);
//     order.products.forEach(product => this.addProduct(product));
//   }

//   addProduct(product?: any): void {
//     const productForm = this.fb.group({
//       productName: [product?.productName || '', Validators.required],
//       quantity: [product?.quantity || 1, [Validators.required, Validators.min(1)]],
//       productPrice: [product?.productPrice || 0, Validators.required]
//     });
//     this.products.push(productForm);
//   }

//   removeProduct(index: number): void {
//     this.products.removeAt(index);
//   }

//   onDeliveryMethodChange(): void {
//     this.editOrderForm.get('deliveryMethod')?.valueChanges.subscribe((value) => {
//       if (value === 'IN_STORE_PICKUP') {
//         this.editOrderForm.get('shippingAddress')?.disable();
//       } else {
//         this.editOrderForm.get('shippingAddress')?.enable();
//       }
//     });
//   }

//   onSubmit(): void {
//     if (this.editOrderForm.valid) {
//       // Handle form submission
//       console.log(this.editOrderForm.value);
//     }
//   }

//   onCancel(): void {
//     // Handle cancel action
//   }
// }


export class EditOrderComponent implements OnInit {

  orderId!: number;
  order!: Order;
  editOrderForm!: FormGroup;
  displayedColumns: string[] = ['productName', 'quantity', 'productPrice', 'actions'];
  orderItems: any[] = [];

  newProductId: FormControl = new FormControl('');


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService,
    private snackBar: MatSnackBar
    ) {}



  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['id'];
    this.loadOrderDetails(this.orderId);
    this.initForms()
    this.onDeliveryMethodChange();
  }

  initForms(){
    this.editOrderForm = this.fb.group({
      orderNumber: [{ value: '', disabled: true }, Validators.required],
      clientName: [{ value: '', disabled: true }, Validators.required],
      clientEmail: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      paymentMethod: ['', Validators.required],
      deliveryMethod: ['', Validators.required],
      status: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      products: this.fb.array([])
    });
  }

  get products(): FormArray {
    return this.editOrderForm.get('products') as FormArray;
  }



  loadOrderDetails(orderId: number): void {
    this.orderService.getOrderById(orderId).subscribe((order: Order) => {

      this.order = order;

      this.editOrderForm.patchValue({
        orderNumber: order.orderNumber,
        clientName: `${order.user.firstName} ${order.user.lastName}`,
        clientEmail: order.user.email,
        paymentMethod: order.paymentMethod,
        deliveryMethod: order.deliveryMethod,
        status: order.status,
        shippingAddress: order.shippingAddress
      });

      this.orderItems = order.items;
    });
  }


  removeProduct(item: any): void {
    const index = this.orderItems.findIndex(i => i === item);
    if (index !== -1) {
      this.orderItems.splice(index, 1);
      this.orderItems = [...this.orderItems];
    }
  }

  onDeliveryMethodChange(): void {
    this.editOrderForm.get('deliveryMethod')?.valueChanges.subscribe((value) => {
      if (value === 'IN_STORE_PICKUP') {
        this.editOrderForm.get('shippingAddress')?.disable();
      } else {
        this.editOrderForm.get('shippingAddress')?.enable();
      }
    });
  }




  addProduct(): void {
    if (this.newProductId) {
      this.productService.getProductById(+this.newProductId.value).subscribe(
        (product) => {
          this.orderItems.push({
            productName: product.name,
            quantity: 1,
            productId: product.id,
            productPrice: product.price
          });
          this.orderItems = [...this.orderItems];
          this.newProductId.setValue('')
        },
        (error) => {
          this.snackBar.open('Produit non trouvé', 'Fermer', { duration: 3000 });
        }
      );
    } else {
      this.snackBar.open('Veuillez entrer un ID de produit', 'Fermer', { duration: 3000 });
    }
  }
  


  // onSubmit(): void {
  //   if (this.editOrderForm.valid) {
  //     console.log(this.editOrderForm.value);
  //     this.snackBar.open('Order updated successfully!', 'Close', { duration: 3000 });
  //   } else {
  //     this.snackBar.open('Please fill out the form correctly.', 'Close', { duration: 3000 });
  //   }
  // }





  onSubmit(): void {
    if (this.editOrderForm.invalid) {
      this.snackBar.open('Veuillez remplir tous les champs requis', 'Fermer', { duration: 3000 });
      return;
    }

    const formValues = this.editOrderForm.getRawValue();
    const orderRequest = {
      userId: this.order.user.id,
      paymentMethod: formValues.paymentMethod,
      deliveryMethod: formValues.deliveryMethod,
      status: formValues.status,
      // shippingAddress: formValues.deliveryMethod === 'IN_STORE_PICKUP' ? '' : formValues.shippingAddress,
      shippingAddress: formValues.shippingAddress,
      items: this.orderItems.map(item => ({
        productId: item.productId,
        quantity: item.quantity
      }))
    };

    this.orderService.updateOrder(orderRequest, this.order.id).subscribe(
      response => {
        this.snackBar.open('Commande mise à jour avec succès', 'Fermer', { duration: 3000 });
        // Logique pour gérer la réponse du serveur
      },
      error => {
        this.snackBar.open('Erreur lors de la mise à jour de la commande', 'Fermer', { duration: 3000 });
        // Logique pour gérer l'erreur
      }
    );
  }



  onCancel(): void {
    // Handle cancel action
  }


}