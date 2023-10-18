import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'Home', component : HomeComponent},
  {
    path : 'Customer', 
    loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(m => m.CustomerModule)
  },
  {
    path : 'Supplier', 
    loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(m => m.SupplierModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
