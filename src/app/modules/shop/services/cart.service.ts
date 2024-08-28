import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: CartItem[] = [];

//   constructor() { }

//   addToCart(product: Product, quantity: number) {
//     const existingItem = this.cartItems.find(item => item.product.id === product.id);
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       this.cartItems.push({ product, quantity });
//     }
//   }

//   getCartItems(): CartItem[] {
//     return this.cartItems;
//   }

//   clearCart() {
//     this.cartItems = [];
//   }
// }




// // fonctionne bien

// @Injectable()
// export class CartService {

//   private cartItems: CartItem[] = [];
//   private cartItemsCount = new BehaviorSubject<number>(0);
//   cartItemsCount$ = this.cartItemsCount.asObservable();

//   constructor() { }

//   addToCart(product: Product, quantity: number) {
//     const existingItem = this.cartItems.find(item => item.product.id === product.id);
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       this.cartItems.push({ product, quantity });
//     }
//     this.updateCartItemsCount();
//   }

//   getCartItems(): CartItem[] {
//     return this.cartItems;
//   }

//   clearCart() {
//     this.cartItems = [];
//     this.updateCartItemsCount();
//   }

//   private updateCartItemsCount() {
//     const totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
//     // const totalQuantity = this.cartItems.reduce((total, item) => total, 0);
//     this.cartItemsCount.next(totalQuantity);
//   }

// }



@Injectable()
export class CartService {
  private items: CartItem[] = [];
  private itemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  get items$(): Observable<CartItem[]> {
    return this.itemsSubject.asObservable();
  }

  addItem(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    this.itemsSubject.next(this.items);
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.itemsSubject.next(this.items);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
    this.itemsSubject.next(this.items);
  }

  clearCart(): void {
    this.items = [];
    this.itemsSubject.next(this.items);
  }
}
