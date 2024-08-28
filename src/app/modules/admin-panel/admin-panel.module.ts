import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';

import { AdminDashboardSidenavComponent } from './components/admin-dashboard-sidenav/admin-dashboard-sidenav.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardHeaderComponent } from './components/admin-dashboard-header/admin-dashboard-header.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ImageVisualizerComponent } from './components/image-visualizer/image-visualizer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { OrderService } from './services/order.service';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CustomerService } from './services/customer.service';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CategoryService } from './services/category.service';
import { AuthModule } from '../auth/auth.module';
import { PhotoUploaderComponent } from './components/photo-uploader/photo-uploader.component';
import { PhotoService } from './services/photo.service';
import { AdminImagesVisualizerComponent } from './components/admin-images-visualizer/admin-images-visualizer.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { AddCategoryDialogComponent } from './components/add-category-dialog/add-category-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';

@NgModule({
  declarations: [
  
    AdminDashboardComponent,
    AdminDashboardHeaderComponent,
    AdminDashboardSidenavComponent,
    OverviewComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    SettingsComponent,
    ProductDetailComponent,
    ImageVisualizerComponent,
    ProductEditComponent,
    AddProductComponent,
    ImageUploaderComponent,
    StatusColorPipe,
    OrderDetailComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    PhotoUploaderComponent,
    AdminImagesVisualizerComponent,
    TextEditorComponent,
    AddCategoryDialogComponent,
    ConfirmDialogComponent,
    EditOrderComponent
    
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AuthModule
    
    // BrowserAnimationsModule
  ],
  providers:[
    ProductService,
    OrderService,
    StatusColorPipe,
    CustomerService,
    CategoryService,
    PhotoService
  ]
})
export class AdminPanelModule { }
