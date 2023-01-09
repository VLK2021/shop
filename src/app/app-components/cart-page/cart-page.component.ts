import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ProductService} from "../../product.service";
import {OrderService} from "../../order.service";
import {ICartProducts} from "../../interfaces/ICartProducts";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
  cartProducts: ICartProducts[];
  totalPrice = 0;
  form: FormGroup;
  submitted = false;

  constructor(private productService: ProductService,
              private orderService:OrderService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.cartProducts = this.productService.cartProducts;
    for (let i = 0; i < this.cartProducts.length; i++) {
      // @ts-ignore
      this.totalPrice += +this.cartProducts[i].price
    }
  };

  createForm(): void {
    this.form = new FormGroup<any>({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash'),
    })
  };

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      orders: this.cartProducts,
      price: this.totalPrice,
      date: new Date()
    };

    this.orderService.create(order).subscribe(res => {
      this.form.reset()
      this.submitted = false
    });
  };

  delete(product: any) {
    this.totalPrice -= +product.price;
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }
}
