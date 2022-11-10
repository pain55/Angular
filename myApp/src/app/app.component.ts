import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  name: String = "Sai";
  isDisabled: boolean = false;
  successClass="text-success";
  hasError: boolean = false;
  isSpecial = true;

  messageClasses = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  greet() : String{
    return "hello " + this.name;
  }
}
