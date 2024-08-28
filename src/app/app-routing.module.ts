import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoleGuard } from './modules/auth/guards/admin-role.guard';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes: Routes = [
  // {path: '', redirectTo: 'index',pathMatch:'full'}
  // {path:'index',loadChildren : () => import('./Modules/public-ui/public-ui.module').then((m) => m.PublicUiModule)}, // pour le home ui
  {path:'admin',loadChildren : () => import('./modules/admin-panel/admin-panel.module').then((m) => m.AdminPanelModule), canActivate: [AuthGuard,AdminRoleGuard] },
  {path:'shop',loadChildren : () => import('./modules/shop/shop.module').then((m) => m.ShopModule)},
  {path:'auth',loadChildren : () => import('./modules/auth/auth.module').then((m) => m.AuthModule)}, // pour le panel admin
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: '**', redirectTo: '/shop'}
];

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { 
//     path: 'orders', 
//     component: OrdersComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { expectedRole: 'ROLE_USER' } 
//   },
//   { 
//     path: 'admin', 
//     component: AdminComponent, 
//     canActivate: [AuthGuard, RoleGuard], 
//     data: { expectedRole: 'ROLE_ADMIN' } 
//   },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: '**', redirectTo: '/login' } // Redirection pour les routes non trouvées
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
