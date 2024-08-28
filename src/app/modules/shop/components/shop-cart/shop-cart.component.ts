import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent {
  cartItems$ = this.cartService.items$;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void { }

  removeItem(productId: number): void {
    this.cartService.removeItem(productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
  

  onCheckout(): void {
    this.router.navigateByUrl('shop/checkout');
  }
}
