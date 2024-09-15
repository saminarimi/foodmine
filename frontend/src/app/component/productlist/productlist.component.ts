import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  products: any[] = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Product C', price: 300 },
  ];

  constructor(private cartService: CartService) {

  }

  gettingProductsFromCart() {
    this.products = this.cartService.getCartItems();
  }

  addToCart(product: any) {
    this.cartService.addItemsToCart(product);
    alert('Product has been added to the cart')
  }

}
