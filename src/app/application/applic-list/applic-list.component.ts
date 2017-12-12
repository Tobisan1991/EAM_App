import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Application} from '../application.component';

@Component({
  selector: 'app-applic-list',
  templateUrl: './applic-list.component.html',
  styleUrls: ['./applic-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicListComponent implements OnInit {

  constructor() { }
  applications:any;  
  ngOnInit() {
    
  }



}
