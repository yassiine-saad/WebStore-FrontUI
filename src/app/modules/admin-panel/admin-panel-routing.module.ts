import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminRoleGuard } from '../auth/guards/admin-role.guard';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';


const children_routes: Routes = [
    {path:'overview',component:OverviewComponent, canActivate: [AuthGuard,AdminRoleGuard]},
    {path:'products',component:ProductsComponent, canActivate: [AuthGuard,AdminRoleGuard]},
    {path:'orders',component:OrdersComponent, canActivate: [AuthGuard,AdminRoleGuard]},
    {path:'customers',component:CustomersComponent,canActivate: [AuthGuard,AdminRoleGuard]},
    {path:'settings',component:SettingsComponent,canActivate: [AuthGuard,AdminRoleGuard]},
    {path:'',redirectTo:'overview',pathMatch:'full'},
    
    { path: 'products/add', component: AddProductComponent,canActivate: [AuthGuard,AdminRoleGuard] },
    { path: 'products/:id/edit', component: ProductEditComponent,canActivate: [AuthGuard,AdminRoleGuard] },
    { path: 'products/:id', component: ProductDetailComponent,canActivate: [AuthGuard,AdminRoleGuard] },

    { path: 'orders/:id', component: OrderDetailComponent ,canActivate: [AuthGuard,AdminRoleGuard]},
    { path: 'orders/:id/edit', component: EditOrderComponent ,canActivate: [AuthGuard,AdminRoleGuard]},

    { path:'customers/add', component : AddCustomerComponent ,canActivate: [AuthGuard,AdminRoleGuard] },
    { path:'customers/:id/edit', component : EditCustomerComponent , canActivate: [AuthGuard,AdminRoleGuard]},
    { path:'customers/:id', component : CustomerDetailsComponent,canActivate: [AuthGuard,AdminRoleGuard] },

    { path:'texteditor', component : TextEditorComponent,canActivate: [AuthGuard,AdminRoleGuard] }

];

const routes: Routes = [
  {path: 'dashboard' ,component: AdminDashboardComponent ,children: children_routes},
  {path:'',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
