import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to our EAM App';

  public BusinessFunction ={test : "max", }
  public BusinessClicked = false;

  onSelect(){
    this.BusinessClicked=true;
  }

  menueList = [
    // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
  {
    name: "Business Function",
    slug: "function"
  },
  {
    name: "Business Process",
    slug: "process"
  },
  {
    name: "Appsystem",
    slug: "appsystem"
  },{
    name: "Application",
    slug: "application"
  } ];
  constructor() { }
  //generate Moduls! ng g component youcomponentName
}
