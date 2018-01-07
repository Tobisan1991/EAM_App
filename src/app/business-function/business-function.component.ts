import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { SearchNamePipe } from '../search-name.pipe'
import {LoginComponent} from '../login/login.component'

declare var firebase: any;
const d: Date = new Date();


@Component({
  selector: 'app-business-function',
  templateUrl: './business-function.component.html',
  styleUrls: ['./business-function.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService, SearchNamePipe, LoginComponent ]
})
export class BusinessFunctionComponent implements OnInit {

  name:String;
  descr:String;
  typ:String;
  datum: String;
  liste = [];
  isDesc: boolean = false;
  column: string = 'Name';
  direction: number;
  loginName: String;


  constructor(
    private dataService: DataService,
    private router: Router, 
    private route: ActivatedRoute,
    private searchName: SearchNamePipe,
    private loginComponent: LoginComponent) { 

      this.datum=Date().toString();

  }

  ngOnInit() {
    this.fbGetData();
    
    //console.log(this.liste)
  }

fbGetData(){

  firebase.database().ref().child('/BFunctions/').orderByChild('CFlag').equalTo('active').
  on('child_added', (snapshot) => {  
  //firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
 // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
  this.liste.push(snapshot.val())
  })
}


fbPostData(name,descr,typ){
 // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
 firebase.database().ref().child('/BFunctions/').child(name).set({
 AName: name ,BDescr: descr, CFlag: 'active', DCreationDate: this.datum,FTyp: typ //, created: this.creationDate, altered: 'none', removed: 'none'
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
    CFlag: 'archived'//, removed: this.removeDate
  });
//   firebase.database().ref().child('/BFunctions/'+key+'/').remove(), 
   window.location.reload();
 }

 sort(property){
  this.isDesc = !this.isDesc; //change the direction    
  this.column = property;
  this.direction = this.isDesc ? 1 : -1;
};

}



