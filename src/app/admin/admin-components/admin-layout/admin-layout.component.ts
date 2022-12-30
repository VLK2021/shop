import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../app-components/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  logout($event: MouseEvent) {
    // @ts-ignore
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/admin', 'login'])
  }
}
