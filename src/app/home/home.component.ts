import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
  constructor() { 
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
