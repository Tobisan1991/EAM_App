import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMyOptions } from 'mydatepicker';




@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Application implements OnInit {

  private myDatePickerOptions: IMyOptions = {

    dateFormat: 'dd.mm.yyyy',

  };



  constructor() {

  }

  ngOnInit() {
  }




}
