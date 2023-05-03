import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal} from '@angular/core/rxjs-interop'

interface Product{

    id:number
    productName:string,
    productImg:string
    productPrice:string
    productDescription:string
}

export interface AddProduct{
  productName:string,
  productImg:string
  productPrice:string
  productDescription:string
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }
  private url='http://localhost:3000/products'
  private products$ = this.http.get<Product[]>(this.url)
  


  //signals

  products= toSignal<Product[], Product[]>(this.products$, {initialValue:[]})
  

  addProduct(newProduct:AddProduct){
     
     this.http.post(this.url, newProduct).subscribe(res=>{
      console.log(res);
      
     })
  }
}
