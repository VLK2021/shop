import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuillModule} from 'ngx-quill'

import {AdminLayoutComponent} from './admin-components/admin-layout/admin-layout.component';
import {LoginPageComponent} from "./admin-components/login-page/login-page.component";
import {AddPageComponent} from './admin-components/add-page/add-page.component';
import {DashboardPageComponent} from './admin-components/dashboard-page/dashboard-page.component';
import {OrdersPageComponent} from './admin-components/orders-page/orders-page.component';
import {EditPageComponent} from "./admin-components/edit-page/edit-page.component";
import {AuthGuard} from "../auth.guard";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddPageComponent,
    DashboardPageComponent,
    OrdersPageComponent,
    EditPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          {path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard]},
          {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]},
          {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
        ]
      }
    ]),
  ],
  exports: [RouterModule],
})
export class AdminModule {
}
