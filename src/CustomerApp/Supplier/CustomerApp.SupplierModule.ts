import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRoutingModule } from '../Routing/CustomerApp.SupplierRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
