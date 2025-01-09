import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-product',
  imports: [CommonModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      name: 'Product 1',
      description: 'This is a description for product 1.',
      imageUrl: 'https://www.ackermans.co.za/cdn/shop/files/PR21998BI2809_196264_CLOG_CHARCOAL_CHARCOAL_2_SZ4.webp?v=1729338588&width=600',
      sizes: ['1','2','3','4','5','6','7','8','9','10','11','12'], // Available sizes
      colors: ['Red', 'Blue', 'Green'], // Available colors
      link: '#',
    },
    {
      name: 'Product 2',
      description: 'This is a description for product 2.',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      sizes: ['1','2','3','4','5','6','7','8','9','10','11','12'], // Shoe sizes
      colors: ['Black', 'White'], // Available colors
      link: '#',
    },
    {
      name: 'Product 3',
      description: 'This is a description for product 3.',
      imageUrl: 'https://www.ackermans.co.za/cdn/shop/files/PR27172BI15550_202440_SKATE_SNEAKER_WHITE_WHITE_2_SZ4_10eaff1f-c888-4033-bf0a-07c0741f72f0.webp?v=1729360262',
      sizes: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      colors: ['Yellow', 'Black'], // Available colors
      link: '#',
    },
  ];
  constructor(private cartService: CartService) { }

  addToCart(product: any, selectedSize: string, selectedColor: string) {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color before adding to cart!');
      return;
    }

    const productWithDetails = { ...product, selectedSize, selectedColor };
    this.cartService.addToCart(productWithDetails); // Add product with size and color to the cart
  }

}
