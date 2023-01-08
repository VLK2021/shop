import {Component, Input, OnInit} from '@angular/core';

import {IProduct} from "../../interfaces/IProduct";
import {ProductService} from "../../product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input()
  product: any

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addProduct(product: IProduct) {
    this.productService.addProduct(product);
  }

}
