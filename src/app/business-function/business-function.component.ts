import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { SearchNamePipe } from '../search-name.pipe';
import { LoginComponent } from '../login/login.component';
import {NavbarService} from '../navbar.service';

declare var firebase: any;
const d: Date = new Date();

// function performGet(){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       let result = 0;
//       for (let i = 0; i<= 200000; i++){
//         result = result +1;
//       }
//       resolve(result);
//     },0);

    // firebase.database().ref().child('/AllID/').
    // on('child_added', (snapshot) => {
    //   this.idlist.push(snapshot.val()
    //   )

//  });
//  }

@Component({
  selector: 'app-business-function',
  templateUrl: './business-function.component.html',
  styleUrls: ['./business-function.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService, SearchNamePipe, LoginComponent]
})

export class BusinessFunctionComponent implements OnInit {

  id;
  name: String;
  descr: String;
  typ: String;
  bprocess: String;
  appsystem: String;
  applications: String;
  datum: String;
  liste = [];
  bprocessliste = [];
  applicationliste = [];
  appsystemliste = [];
  isDesc: boolean = false;
  column: String = 'Name';
  direction: number;
  loginName: String;
  statusForm: Boolean = false;


  private idlist = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private searchName: SearchNamePipe,
    private navbarService: NavbarService
    ) {
       
    this.datum = Date().toString();
  }

 

  ngOnInit() {
    
    this.navbarService.show(); 
    firebase.database().ref().child('/AllID/').
    on('child_added', (snapshot) => {
      this.idlist.push(snapshot.val()
      )})
   this.id = this.idlist[0];
   this.id++;
   this.fbGetData()
  }


//  test(){

//     // performGet().then((res) => console.log((res)
       
//     //    )
//     // ).catch((error) => console.log(error))
//     firebase.database().ref().child('/AllID/').
//      on('child_added', (snapshot) => {
//        this.idlist.push(snapshot.val()
//        )})
//     this.id = this.idlist[0];
//     this.id++;
//     // return performGet();

  
// }



  fbGetData() {

    firebase.database().ref().child('/BFunctions/').orderByChild('CFlag').equalTo('active').
      on('child_added', (snapshot) => {
        //firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
        // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
        this.liste.push(snapshot.val())
      });
    // firebase.database().ref().child('/ID/').on('child_added', (snapshot) => {  

    //Bprocess DB Zugriff
    firebase.database().ref().child('/BProcess/').orderByChild('CFlag').equalTo('active').
      on('child_added', (snapshot) => {

        this.bprocessliste.push(snapshot.val())
      });

    //Appsystem DB Zugriff
    firebase.database().ref().child('/Appsystem/').orderByChild('CFlag').equalTo('active').
      on('child_added', (snapshot) => {
        this.applicationliste.push(snapshot.val())
      })

    //Application DB Zugriff
    firebase.database().ref().child('/Application/').orderByChild('CFlag').equalTo('active').
      on('child_added', (snapshot) => {

        this.applicationliste.push(snapshot.val())
      });
    console.log(this.applicationliste)


      ;

  }


  fbPostData(name, descr, typ, bprocess, applications) {
    // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});


    firebase.database().ref().child('/BFunctions/').child(this.id).set({
      ZID: this.id, AName: name, BDescr: descr, CFlag: 'active', DCreationDate: this.datum, FTyp: typ, GBProcess: bprocess, HApllication: applications//, created: this.creationDate, altered: 'none', removed: 'none'
    });
    this.name = '';
    this.descr = '';
    this.bprocess = "";
    this.applications = "";

    firebase.database().ref().child('/AllID/').set({

      BfuncID: this.id++
    });


  }
  // https://www.youtube.com/watch?v=Fb9o2uwRAk0 minute 3:24 
  //erklärung zu root verzeichnis etc.
  /*
deleteSth(key){
 // firebase.database().ref('/BFunctions/').
  firebase.database().ref().child('/BFunctions/'+key+'/').remove();
}*/


  fbDeleteData(key) {
    firebase.database().ref().child('/BFunctions/').child(key).update({
      CFlag: 'archived'//, removed: this.removeDate
    });
    //   firebase.database().ref().child('/BFunctions/'+key+'/').remove(), 
    window.location.reload();
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

  displayForm(val) {
    if (val == true) {
      this.statusForm = false;
      console.log("status " + this.statusForm);
    } else {
      this.statusForm = true;
      console.log(this.statusForm);
    }
  }

}



