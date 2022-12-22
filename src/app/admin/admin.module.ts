import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AdminLayoutComponent} from './admin-components/admin-layout/admin-layout.component';
import {LoginPageComponent} from "./admin-components/login-page/login-page.component";
import { AddPageComponent } from './admin-components/add-page/add-page.component';
import { DashboardPageComponent } from './admin-components/dashboard-page/dashboard-page.component';
import { OrdersPageComponent } from './admin-components/orders-page/orders-page.component';
import {EditPageComponent} from "./admin-components/edit-page/edit-page.component";


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
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path:'', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent},
          {path: 'orders', component: OrdersPageComponent},
          {path: 'add', component: AddPageComponent},
          {path: 'product/:id/edit', component: EditPageComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule {
}
