import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddProduct, ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',

})
export class AddProductComponent {
  
  constructor(private fb:FormBuilder, private productService:ProductService){}

  form = this.fb.group({
    productName:['', Validators.required],
    productImg:['' ,Validators.required] ,
    productPrice:['', Validators.required],
    productDescription:['', Validators.required]
  })

  addProduct(){

   if(this.form.valid){
    let product= this.form.value as AddProduct
    this.productService.addProduct(product)
   }
  }

}
