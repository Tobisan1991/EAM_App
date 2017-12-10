import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DbService } from '../../db.service.service';
import {Application} from '../application.component';

@Component({
  selector: 'app-applic-list',
  templateUrl: './applic-list.component.html',
  styleUrls: ['./applic-list.component.css'],
  providers: [DbService],
  encapsulation: ViewEncapsulation.None
})
export class ApplicListComponent implements OnInit {

  constructor(private _dbService:DbService) { }
  applications:any;  
  ngOnInit() {
    this.getData();
  }

  getData(){
    this._dbService
       .getData()
       .subscribe(applications => {
         this.applications = applications;
     } )
     
 }
 
/*  deleteData(id){
     this._dbService
       .deleteData(id)
       .subscribe(() => {
       this.getData();
     } )
 } */


}
