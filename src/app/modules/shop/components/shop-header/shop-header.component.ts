import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrl: './shop-header.component.css',
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: 1
      })),
      transition('closed <=> open', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]

  
})
export class ShopHeaderComponent implements OnInit {
  // cartItemsCount$ = this.cartService.cartItemsCount$;
  menuOpen: boolean = false;


  fullName: string | null = null;
  role: string | null = null;

  cartItemsCount: number = 0;
  subscription!: Subscription;

  constructor(private cartService: CartService,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.cartService.items$.subscribe(cart => {
      this.cartItemsCount = cart.length;
    });

    if (this.authService.isAuthenticated()) {
      this.fullName = this.authService.getFullName();
      this.role = this.authService.getRole();
    }

  }

  isAuthenticated() : boolean{
    return this.authService.isAuthenticated();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }

  navigateToAdmin(): void {
    this.router.navigate(['../admin']);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
 
  
}





  