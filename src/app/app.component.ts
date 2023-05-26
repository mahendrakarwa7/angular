import { Component } from '@angular/core';
import * as tslib_1 from "tslib";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title="Registration form";
  displayname=" ";
  displayaddress=" ";
  displaycontact="";
  displayemail="";

  getValue(name:string,address:string,contact:string,email:string){
    this.displayname=name;
    this.displayaddress=address;
    this.displaycontact=contact;
    this.displayemail=email;
  }
}
