import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar-list',
  templateUrl: './top-bar-list.component.html',
  styleUrls: ['./top-bar-list.component.css']
})
export class TopBarListComponent implements OnInit {

  topbarList = [
    // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
  {
    name: "Business Function",
    slug: "business_function"
  },
  {
    name: "Business Process",
    slug: "business_process"
  },
  {
    name: "Appsystem",
    slug: "appsystem"
  },{
    name: "Application",
    slug: "application"
  } ];
  constructor() { }
  
    ngOnInit() {
    }

}
