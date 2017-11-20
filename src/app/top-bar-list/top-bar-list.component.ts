import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar-list',
  templateUrl: './top-bar-list.component.html',
  styleUrls: ['./top-bar-list.component.css']
})
export class TopBarListComponent implements OnInit {

  topbarList = [{
    // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
    name: "Home",
    slug: "home"
  },
  {
    name: "Configure",
    slug: "configure"
  },{
    name: "Statistics",
    slug: "statistics"
  },{
    name: "Tutorials",
    slug: "tutorials"
  } ];
 // Home","Configure","Statistics
  constructor() { }
  
    ngOnInit() {
    }

}
