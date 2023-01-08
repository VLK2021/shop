import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {MainLayoutComponent} from "./app-components/main-layout/main-layout.component";
import {MainPageComponent} from "./app-components/main-page/main-page.component";
import {ProductPageComponent} from "./app-components/product-page/product-page.component";
import {CartPageComponent} from "./app-components/cart-page/cart-page.component";
import {AuthInterceptor} from "./auth.interseptor";
import {ProductComponent} from "./app-components/product/product.component";
import {SortingPipe} from "./sorting.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ProductComponent,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
