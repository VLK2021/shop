import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: new FormControl(null, Validators.required),
    //   password: new FormControl(null, Validators.required)
    // })
  }


  // submit() {
  //   // console.log(this.form.value.email);
  //   // console.log(this.form);
  //   // this.form.reset()
  // }
}
