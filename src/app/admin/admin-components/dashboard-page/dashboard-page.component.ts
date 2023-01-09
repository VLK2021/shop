import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {ProductService} from "../../../product.service";
import {IProduct} from "../../../interfaces/IProduct";


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardPageComponent implements OnInit {
  products: IProduct[];
  pSubscription: Subscription;
  rSubscription: Subscription;
  productName: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.pSubscription = this.productService.getAll().subscribe(value => {
      this.products = value;
    })
  }

  ngOnDestroy() {
    if (this.pSubscription) {
      this.pSubscription.unsubscribe()
    }
    if (this.rSubscription) {
      this.rSubscription.unsubscribe()
    }
  }


  delete(id: any) {
    this.rSubscription = this.productService.remove(id).subscribe(() => {
      this.products = this.products.filter(prod => prod.id != id);
    })
  }
}
