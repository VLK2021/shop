import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ProductService} from "../../product.service";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {

  product: any;

  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.productService.getById(id).subscribe(value => this.product = value)
    })
  }
}
