import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {OrderService} from "../../../order.service";
import {IOrder} from "../../../interfaces/IOrder";


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})

export class OrdersPageComponent implements OnInit {
  orders: IOrder[];
  pSub: Subscription;
  rSub: Subscription;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(ord => {
      this.orders = ord;
    })
  };

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  };

  remove(id: string) {
    this.rSub = this.orderService.remove(id).subscribe(() => {
      this.orders = this.orders.filter(ord => ord.id !== id);
    })
  }

  delete(id: any) {
    this.rSub = this.orderService.remove(id).subscribe(() => {
      this.orders = this.orders.filter(prod => prod.id != id);
    })
  }
}
