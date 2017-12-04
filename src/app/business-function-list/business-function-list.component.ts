import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BusinessFunction } from '../business-function/businessfunction';
import { businessfunctionService} from '../business-function/business-function.service';

@Component({
  selector: 'app-business-function-list',
  templateUrl: './business-function-list.component.html',
  styleUrls: ['./business-function-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessFunctionListComponent implements OnInit {

  public bfunctions: BusinessFunction[];
  public selectedbf: {};


  onSelect(){

  }

  constructor() { }

  ngOnInit() {
  }

}
