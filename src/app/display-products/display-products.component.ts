import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct, ProductService } from '../Services/product.service';
import { AddProductinCart, CartService, ProductinCart } from '../Services/cart.service';

@Component({
  selector: 'app-display-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-products.component.html'
})
export class DisplayProductsComponent {

  constructor( private productService:ProductService , private cartService:CartService){}

  products= this.productService.products
  
  
  addToCart(productId:number){
    console.log(productId);
    let product =computed(()=> this.products().find(p=>p.id===productId))()
    if(product){
      let{id,...rest}=product
  
      let cartProduct:AddProductinCart={...rest,productId:id, quantity:1}
      console.log(cartProduct);
     this.cartService.addToCart(cartProduct)
      }
    // console.log(product);
    
      return true
  }


}
