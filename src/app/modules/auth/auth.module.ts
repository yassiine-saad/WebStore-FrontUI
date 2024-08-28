import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { UserRoleGuard } from './guards/user-role.guard';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { CodeInputComponent } from './components/code-input/code-input.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountActivationComponent,
    CodeInputComponent,
    ErrorPageComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // JwtModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard,
    UserRoleGuard,
    AdminRoleGuard,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }

  ],
})
export class AuthModule { }
