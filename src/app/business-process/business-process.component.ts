import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { SearchNamePipe } from '../search-name.pipe'
import { rootRoute } from '@angular/router/src/router_module';
import {LoginComponent} from '../login/login.component'
declare var firebase: any;
const d: Date = new Date();


@Component({
  selector: 'app-business-process',
  templateUrl: './business-process.component.html',
  styleUrls: ['./business-process.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService, SearchNamePipe, LoginComponent ]
})


export class BusinessProcessComponent implements OnInit {

  name:String;
  descr:String;
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
  }

  fbGetData(){

    firebase.database().ref().child('/BProcess/').orderByChild('CFlag').equalTo('active').
    on('child_added', (snapshot) => {  
    //firebase.database().ref('/Appsystem/').orderByKey().on('child_added', (snapshot) => {
   // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
    this.liste.push(snapshot.val())
    })
  }

fbPostData(name,descr){
  console.log(name,descr);
  // firebase.database().ref('/Appsystem/').push({Descr: descr, Name: name});
  firebase.database().ref().child('/BProcess/').child(name).set({
  AName: name ,BDescr: descr, CFlag: 'active', DCreationDate: this.datum//, created: this.creationDate, altered: 'none', removed: 'none'
     });
     this.name = '';
     this.descr = '';
           
 }

 fbDeleteData(key){
  firebase.database().ref().child('/BProcess/').child(key).update({
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
