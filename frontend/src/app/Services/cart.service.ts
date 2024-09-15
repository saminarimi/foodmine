import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addItemsToCart(item: any) {
    this.cartItems.push(item);
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
