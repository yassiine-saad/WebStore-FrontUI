import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopLayoutComponent } from './components/shop-layout/shop-layout.component';
import { ShopProductListComponent } from './components/shop-product-list/shop-product-list.component';
import { ShopProductDetailComponent } from './components/shop-product-detail/shop-product-detail.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './components/shop-checkout/shop-checkout.component';
import { AdminRoleGuard } from '../auth/guards/admin-role.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserRoleGuard } from '../auth/guards/user-role.guard';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UserOrderDetailsComponent } from './pages/user-order-details/user-order-details.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ProductImagesVisualizerComponent } from './components/product-images-visualizer/product-images-visualizer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';



const sub_routes: Routes = [
  {path: "products", component: ShopProductListComponent },
  {path:'',redirectTo:'products',pathMatch:'full'},
  { path: 'products/:id', component: ShopProductDetailComponent }, // Route pour afficher les détails du produit
  {path: 'cart', component: ShopCartComponent},
  {path : 'checkout' , component: ShopCheckoutComponent, canActivate: [AuthGuard,UserRoleGuard]},
  {path : 'payment' , component: PaymentComponent},
  // {path : 'confirmation' , component: ConfirmationComponent}

  { 
    path: 'my-orders', 
    component: UserOrdersComponent, 
    canActivate: [AuthGuard], 
    data: { title: 'Mes commandes' } 
  },
  { 
    path: 'my-orders/:id', 
    component: UserOrderDetailsComponent, 
    canActivate: [AuthGuard], 
    data: { title: 'Mes commandes',roles: ['ROLE_USER'] } 
  }, 
  { 
    path: 'my-infos', 
    component: UserInfoComponent, 
    canActivate: [AuthGuard], 
    data: { title: 'Mes informations' } 
  },
  { 
    path: 'order-confirmation', 
    component: OrderConfirmationComponent, 
    canActivate: [AuthGuard], 
    data: { title: 'confirmation' } 
  },

  { 
    path: 'test', 
    component: ProductImagesVisualizerComponent
  },

  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

];


const routes: Routes = [
  {path: "", component: ShopLayoutComponent, children: sub_routes },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
