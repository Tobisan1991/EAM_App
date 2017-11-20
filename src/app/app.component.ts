import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to our EAM App';
  navigation = 'Startmenü';
  topbar = ["Home","Configure","Statistics"];
  constructor() { }
  //generate Moduls! ng g component youcomponentName
}
