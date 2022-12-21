import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./app-components/main-layout/main-layout.component";
import {MainPageComponent} from "./app-components/main-page/main-page.component";
import {ProductPageComponent} from "./app-components/product-page/product-page.component";
import {CartPageComponent} from "./app-components/cart-page/cart-page.component";


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'product/:id', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
