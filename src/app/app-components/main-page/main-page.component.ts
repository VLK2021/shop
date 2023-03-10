import { Component, OnInit } from '@angular/core';

import {ProductService} from "../../product.service";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  products: any

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(value => this.products = value)
  }

}
