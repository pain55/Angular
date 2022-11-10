import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  name: String = "Sai";
  flag: boolean = false;

  greet() : String{
    return "hello " + this.name;
  }
}
