/* The AppComponent class is the root component of the application, and it defines the title property,
which is data bound to the HTML heading in the template */
import { Component } from '@angular/core';

/* This is a decorator function that takes a metadata object that tells Angular how to create and use
this component. */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* The AppComponent class is the root component of the application, and it defines the title property,
which is data bound to the HTML heading in the template */
export class AppComponent {
  title = 'front_Client';
}
