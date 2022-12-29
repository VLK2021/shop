import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  form: FormGroup;


  constructor() {
    this.createForm()
  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: new FormControl(null, Validators.required),
    //   password: new FormControl(null, Validators.required)
    // })
  }

  createForm(): void {
    this.form = new FormGroup<any>({
      email: new FormControl(null),
      password: new FormControl(null),
    })
  }


  // submit() {
  //   // console.log(this.form.value.email);
  //   // console.log(this.form);
  //   // this.form.reset()
  // }
}
