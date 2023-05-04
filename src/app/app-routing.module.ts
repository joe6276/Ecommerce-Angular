import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'add' ,loadComponent:()=>import('./add-product/add-product.component').then(a=>a.AddProductComponent)},
  {path:'product' ,loadComponent:()=>import('./display-products/display-products.component').then(a=>a.DisplayProductsComponent)},
  {path:'cart', loadComponent:()=>import('./cart/cart.component').then(c=>c.CartComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
