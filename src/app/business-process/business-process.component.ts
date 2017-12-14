import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
declare var firebase: any;

@Component({
  selector: 'app-business-process',
  templateUrl: './business-process.component.html',
  styleUrls: ['./business-process.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})


export class BusinessProcessComponent implements OnInit {

  typliste = [];
  liste = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  this.fbGetBFuncData();
  }

fbGetBFuncData(){
  firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
    this.typliste.push(snapshot.val())
    
  }
)}

fbPostData(name,descr, typ){
  // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
   firebase.database().ref().child('/BProcess/').child(name).set({
     Name: name ,Descr: descr, Typ: typ
     });
 }

}
