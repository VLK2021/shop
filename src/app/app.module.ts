import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {MainLayoutComponent} from "./app-components/main-layout/main-layout.component";
import {MainPageComponent} from "./app-components/main-page/main-page.component";
import {ProductPageComponent} from "./app-components/product-page/product-page.component";
import {CartPageComponent} from "./app-components/cart-page/cart-page.component";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
