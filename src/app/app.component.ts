import { Component } from '@angular/core';
import {NavbarService} from "./navbar.service";

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
    name: "Business Process",
    slug: "process"
  },
  {
    name: "Business Function",
    slug: "function"
  },
  {
    name: "Appsystem",
    slug: "appsystem"
  },{
    name: "Application",
    slug: "application"
  } ];
  constructor(private navbarService: NavbarService) { }
  //generate Moduls! ng g component youcomponentName
}
