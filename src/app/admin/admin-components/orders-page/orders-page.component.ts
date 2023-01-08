import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";

import {OrderService} from "../../../order.service";


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})

export class OrdersPageComponent implements OnInit {
  orders: any;
  pSub: Subscription;
  rSub: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(ord => {
      this.orders = ord;
    })
  };

  ngOnDestroy() {
    if (this.pSub){
      this.pSub.unsubscribe();
    }

    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  };

  remove(id:any) {
    this.rSub = this.orderService.remove(id).subscribe(()=>{
      // @ts-ignore
      this.orders = this.orders.filter(ord => ord.id !== id);
    })
  }

  delete(id: any) {
    this.rSub = this.orderService.remove(id).subscribe(() => {
      // @ts-ignore
      this.orders = this.orders.filter(prod => prod.id != id);
    })
  }
}
