import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  form: FormGroup

  constructor() {
  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    // })
  }


  submit() {
    console.log(this.form.value.email);
    console.log(this.form);
    this.form.reset()
  }
}
