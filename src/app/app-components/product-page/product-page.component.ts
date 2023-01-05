import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ProductService} from "../../product.service";
import {IProduct} from "../../interfaces/IProduct";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {

  product: IProduct;

  constructor(private productService:ProductService,
              private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.productService.getById(id).subscribe(value => this.product = value)
    })
  }
}
