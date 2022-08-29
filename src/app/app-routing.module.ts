import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AddCustomerComponent } from './presenter/customers/add-customer/add-customer.component';
import { CustomersComponent } from './presenter/customers/customers-list/customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }