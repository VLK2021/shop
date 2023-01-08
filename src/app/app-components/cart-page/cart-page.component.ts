import {Component, OnInit} from '@angular/core';

import {ProductService} from "../../product.service";
import {IProduct} from "../../interfaces/IProduct";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
  cartProducts: IProduct[];
  totalPrice = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.cartProducts = this.productService.cartProducts;
    for (let i = 0; i < this.cartProducts.length; i++) {
      // @ts-ignore
      this.totalPrice += +this.cartProducts[i].price
    }
  }

}
