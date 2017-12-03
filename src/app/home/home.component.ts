import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { businessfunctionService } from '../business-function/business-function.service';
import { BusinessFunctionComponent } from '../business-function/business-function.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [businessfunctionService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public BusinessFunction ={test : "max", }
  public BusinessClicked = false;

  constructor(private bfService : businessfunctionService) { 
      }

    public onSelect(){
    this.BusinessClicked=true;

    
  }
/*
  public onAddBusinessFunction(){
    
        const testo = {name: "test3", descr: "test", street: "", plz:""};
        this.bfService.insertbf(testo);
  }*/

  //public BusinessFunction = BusinessFunction[];
  


  ngOnInit() {
  }

}
