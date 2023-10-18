import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutingModule } from '../Routing/CustomerApp.MainRouting';
import { DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';

var providerscoll:any = [];
// http call get this from the server
providerscoll.push({ provide: "1", useClass: DbLogger });
providerscoll.push({ provide: "2", useClass: ConsoleLogger });
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger });

@NgModule({
  declarations: [
    HomeComponent, MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRoutingModule
  ],
  /*providers: [
    {//Centralized Dependency Injection
     provide: BaseLogger,
     useClass: ConsoleLogger
    },
    //Conditional lookup table based Dependency Injection
    { provide: "1", useClass: DbLogger },
    { provide: "2", useClass: ConsoleLogger }
],*/
providers: [providerscoll]
,
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
