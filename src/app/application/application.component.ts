import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DbService } from '../db.service.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  providers: [DbService],
  encapsulation: ViewEncapsulation.None
})
export class Application implements OnInit {

  constructor(private _dbService:DbService) { }
  name: string;
  version: string;
  fromTo: string;
  description: string;
  geography: string;
  ngOnInit() {
  }

  onSubmit(form : NgForm){
    
    this._dbService.addData(form.value)
    .subscribe( data=>"")
    

  }
  

}
