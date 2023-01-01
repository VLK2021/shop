import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../product.service";


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})

export class AddPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private productService: ProductService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = new FormGroup<any>({
      type: new FormControl(null, Validators.required),
      tittle: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    })
  };

  submit() {
    if (this.form.invalid) {
      return;
    }

    const product = {
      type: this.form.value.type,
      tittle: this.form.value.tittle,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date()
    };

    this.productService.create(product).subscribe(res => console.log(res));

    this.submitted = true;
  };
}
