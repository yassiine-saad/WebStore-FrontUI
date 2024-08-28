import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

// const routes: Routes = [];


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account-activation', component: AccountActivationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  // { path: 'orders', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
