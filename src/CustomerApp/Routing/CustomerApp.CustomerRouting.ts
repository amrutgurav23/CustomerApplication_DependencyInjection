import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';

const CustomerRoutes: Routes = [
  {path : '', component : CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(CustomerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
