import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})

export class AddPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor() {
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

    this.submitted = true;
  };
}
