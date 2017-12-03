import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {businessfunctionService} from "./business-function.service";

@Component({
  selector: 'app-business-function',
  templateUrl: './business-function.component.html',
  styleUrls: ['./business-function.component.css'],
  providers: [businessfunctionService],
  encapsulation: ViewEncapsulation.None

})
export class BusinessFunctionComponent implements OnInit {

  constructor(private bfservice : businessfunctionService ) { }
 
  /*
  onAddBusinessFunction(){

    const testo = {name: "test3", descr: "test", street: "", plz:""};
    this.bfservice.insertbf(testo);

  }
*/
  

  ngOnInit() {
  }

}
