import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
