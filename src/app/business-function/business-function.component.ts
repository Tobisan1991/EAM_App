import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';

declare var firebase: any;


@Component({
  selector: 'app-business-function',
  templateUrl: './business-function.component.html',
  styleUrls: ['./business-function.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class BusinessFunctionComponent implements OnInit {

  liste = [];
  bool = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  this.fbGetData();
  }

fbGetData(){
  firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
    this.liste.push(snapshot.val())
    
  }
)}

fbPostData(name,descr){
 // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
  firebase.database().ref().child('/BFunctions/').child(name).set({
    Name: name ,Descr: descr
    });
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
  // firebase.database().ref('/BFunctions/').
   firebase.database().ref().child('/BFunctions/'+key+'/').remove(), 
   window.location.reload();
   
 }

}



