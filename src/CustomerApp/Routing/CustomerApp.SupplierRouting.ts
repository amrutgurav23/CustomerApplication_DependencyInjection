import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';

const SupplierRoutes: Routes = [
  {path : '', component : SupplierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(SupplierRoutes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
