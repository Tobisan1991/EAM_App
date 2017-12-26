import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
//import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, Control} from '@angular/common';


declare var firebase: any;


@Component({
  selector: 'app-business-function',
  templateUrl: './business-function.component.html',
  styleUrls: ['./business-function.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class BusinessFunctionComponent implements OnInit {

  
  name:String;
  descr:String;
  creationDate:String;
  alterDate:String;
  removeDate:String;
  liste = [];

  constructor(private dataService: DataService,
    private router: Router, private route: ActivatedRoute) { 
    //  this.creationDate=Date;
      // this.alterDate=Date;
      // this.removeDate=Date;
  }

  ngOnInit() {
    
  this.fbGetData();
  console.log(this.liste)
  }

fbGetData(){

  firebase.database().ref().child('/BFunctions/').orderByChild('Flag').equalTo('X').on('child_added', (snapshot) => {
    
  //firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
 // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
  this.liste.push(snapshot.val())
  })
}


fbPostData(name,descr){
 // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
  firebase.database().ref().child('/BFunctions/').child(name).set({
    Name: name ,Descr: descr, Flag: 'X'//, created: this.creationDate, altered: 'none', removed: 'none'
    });
    this.name = '';
    this.descr = '';      
}
  // https://www.youtube.com/watch?v=Fb9o2uwRAk0 minute 3:24 
  //erklärung zu root verzeichnis etc.
  /*
deleteSth(key){
 // firebase.database().ref('/BFunctions/').
  firebase.database().ref().child('/BFunctions/'+key+'/').remove();
}*/

refreshList(){

}

fbDeleteData(key){
  firebase.database().ref().child('/BFunctions/').child(key).update({
    Flag: 'Removed'//, removed: this.removeDate
  });
    
//   firebase.database().ref().child('/BFunctions/'+key+'/').remove(), 
   window.location.reload();
   
 }

}



