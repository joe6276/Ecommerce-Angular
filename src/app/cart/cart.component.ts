import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {


  constructor(private cartService:CartService){}
  
  cart = this.cartService.productsinCart
}
