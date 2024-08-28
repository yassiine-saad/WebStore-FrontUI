import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShopProductListComponent } from './components/shop-product-list/shop-product-list.component';
import { ProductService } from './services/product.service';
import { ShopLayoutComponent } from './components/shop-layout/shop-layout.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ShopProductDetailComponent } from './components/shop-product-detail/shop-product-detail.component';
import { CartService } from './services/cart.service';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './components/shop-checkout/shop-checkout.component';
import { AuthModule } from '../auth/auth.module';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { PhoneFormatDirective } from './directives/phone-format.directive';
import { PhoneNumberFormatterDirective } from './directives/phone-number-formatter.directive';
import { UserOrdersService } from './services/user-orders.service';
import { UserOrderDetailsComponent } from './pages/user-order-details/user-order-details.component';
import { CheckoutService } from './services/checkout.service';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductImagesVisualizerComponent } from './components/product-images-visualizer/product-images-visualizer.component';
import { ShopFooterComponent } from './components/shop-footer/shop-footer.component';
import { PaymentService } from './services/payment.service';
import { PaymentComponent } from './components/payment/payment.component';
import { StripeService } from './services/stripe.service';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { PaymentMethodPipe } from './pipes/payment-method.pipe';
import { DeliveryMethodPipe } from './pipes/delivery-method.pipe';


@NgModule({
  declarations: [
    ProductCardComponent,
    ShopProductListComponent,
    ShopLayoutComponent,
    ShopHeaderComponent,
    ShopProductDetailComponent,
    ShopCartComponent,
    ShopCheckoutComponent,
    UserInfoComponent,
    UserOrdersComponent,

    PhoneFormatDirective,
    PhoneNumberFormatterDirective,
    UserOrderDetailsComponent,
    OrderConfirmationComponent,
    ProductImagesVisualizerComponent,
    ShopFooterComponent,
    PaymentComponent,
    CreditCardFormComponent,
    AboutComponent,
    ContactComponent,
    OrderStatusPipe,
    PaymentMethodPipe,
    DeliveryMethodPipe
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule // on dois l'ajouter obligatoirement pour provider le authService
  ],
  providers: [
    ProductService,
    CartService,
    UserOrdersService,
    CheckoutService,
    PaymentService,
    StripeService,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    }
  ]
})
export class ShopModule { }
