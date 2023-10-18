import {NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// Step 1: Create :- We create the validation object model
// Step 2: Connect :- We connect the validation to the UI
// Step 3: Check :- IsValid , IsDirty

export class Customer{
    CustomerCode:string = "";
    CustomerName:string = "";
    CustomerAmount:number = 0;
    formCustomerGroup: FormGroup; // Create object of FormGroup
    constructor(){        
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({}); // Use the builder to create 
        // control --> validation
        // 1 control --> 1 validation
        this.formCustomerGroup.
        addControl("CustomerNameControl",
                    new FormControl('', Validators.required)
        );
        // Customer code control --> 
        //  Required , 4 letter numeric
       var validationcollection = [];
       validationcollection.push(Validators.required);
       validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))

       this.formCustomerGroup.
       addControl("CustomerCodeControl",
                   new FormControl('', Validators.compose(validationcollection))
       );
    }
}