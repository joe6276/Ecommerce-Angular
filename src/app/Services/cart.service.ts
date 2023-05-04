import { HttpClient } from '@angular/common/http';
import { Injectable, computed } from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop"
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface ProductinCart{
  id:number
  productName:string,
  productImg:string
  productPrice:string
  productDescription:string
  productId:number
  quantity:number
}

export interface AddProductinCart{
  productName:string,
  productImg:string
  productPrice:string
  productDescription:string
  productId:number
  quantity:number
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient, private router:Router) { }
  private url= 'http://localhost:3000/cart'
  private cart$:Observable<ProductinCart[]>= this.getProductsinCart()
  productsinCart=toSignal<ProductinCart[],ProductinCart[]>(this.cart$, {initialValue:[]})
  

  getProductsinCart(){
   return this.http.get<ProductinCart[]>(this.url)
  }

 

  addToCart(product:AddProductinCart){ 
    let existingProduct =computed(()=> this.productsinCart().find(p=>p.productId===product.productId))()
    if(existingProduct){
      existingProduct.quantity=existingProduct.quantity+1
     this.http.put(this.url+'/'+existingProduct.id,existingProduct).subscribe()
     this.getProductsinCart()
    }
    else{
      this.http.post(this.url, product).subscribe() 
  }
  
}
}
