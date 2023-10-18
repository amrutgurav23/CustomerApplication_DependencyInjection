import { Component } from '@angular/core';
import {BaseLogger} from '../Utility/CustomerApp.Logger'

@Component({
  selector: 'HomeComponent:not(p)',
  templateUrl: './CustomerApp.HomeView.html'
})
export class HomeComponent {
  Logobj : BaseLogger;
  constructor(_logger:BaseLogger){
    this.Logobj = _logger;
    this.Logobj.Log();
  }
}
