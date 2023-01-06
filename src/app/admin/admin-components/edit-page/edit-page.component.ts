import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {switchMap} from "rxjs";

import {ProductService} from "../../../product.service";
import {IProduct} from "../../../interfaces/IProduct";


@Component({
  selector: 'app-adit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements OnInit {
  form:FormGroup;
  product:IProduct;
  submitted = false;

  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => {
        return this.productService.getById(params['id'])
      })
    ).subscribe(value => {
      this.product = value;
      this.form = new FormGroup<any>({
        type: new FormControl(this.product.type, Validators.required),
        tittle: new FormControl(this.product.tittle, Validators.required),
        photo: new FormControl(this.product.photo, Validators.required),
        info: new FormControl(this.product.info, Validators.required),
        price: new FormControl(this.product.price, Validators.required),
      })
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.productService.update({
      ...this.product,
      type: this.form.value.type,
      tittle: this.form.value.tittle,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date()
    }).subscribe(res => {
      this.submitted = false
      this.router.navigate(['/admin', 'dashboard'])
    });
  }
}
