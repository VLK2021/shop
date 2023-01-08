import { Component, OnInit } from '@angular/core';

import {ProductService} from "../../product.service";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {

  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    console.log(this.productService.cartProducts);
  }

}
