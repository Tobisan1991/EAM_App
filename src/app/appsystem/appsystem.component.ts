import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { SearchNamePipe } from '../search-name.pipe'
import { LoginComponent } from '../login/login.component'

declare var firebase: any;
const d: Date = new Date();

@Component({
  selector: 'app-appsystem',
  templateUrl: './appsystem.component.html',
  styleUrls: ['./appsystem.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService, SearchNamePipe, LoginComponent]
})
export class AppsystemComponent implements OnInit {

  name: String;
  application: String;
  datum: String;
  liste = [];
  applications = [];
  isDesc: boolean = false;
  column: string = 'Name';
  direction: number;
  loginName: String;
  openForm: Boolean = false;
  closeForm: Boolean = true;
  radio_asis: boolean;
  radio_tobe: boolean;
  radio_hasbeen: boolean;
  statusForm: Boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private searchName: SearchNamePipe,
    private loginComponent: LoginComponent) {

    this.datum = Date().toString();

  }
  ngOnInit() {
    this.fbGetData();
  }

  fbGetData() {

    firebase.database().ref().child('/Appsystem/').orderByChild('CFlag').equalTo('active').
      on('child_added', (snapshot) => {
        //firebase.database().ref('/Appsystem/').orderByKey().on('child_added', (snapshot) => {
        // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
        this.liste.push(snapshot.val())
      });
    firebase.database().ref().child('/Application/').orderByChild('CFlag').equalTo('active').
      on('child_added', (snapshot) => {
        //firebase.database().ref('/Appsystem/').orderByKey().on('child_added', (snapshot) => {
        // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
        this.applications.push(snapshot.val());
      })
    console.log(this.applications);
  }

  fbPostData(name, application) {
    // firebase.database().ref('/Appsystem/').push({Descr: descr, Name: name});
    firebase.database().ref().child('/Appsystem/').child(name).set({
      AName: name, BApplication: application, CFlag: 'active', DCreationDate: this.datum //, created: this.creationDate, altered: 'none', removed: 'none'
    });
    this.name = '';
    this.application = '';

  }

  fbDeleteData(key) {
    firebase.database().ref().child('/Appsystem/').child(key).update({
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

  onRadioClick(val) {
    if (val == 0) {
      console.log(val);
      this.radio_asis = true;
      this.radio_tobe = false;
      this.radio_hasbeen = false;
    } else if (val == 1) {
      console.log(val);
      this.radio_asis = false;
      this.radio_tobe = true;
      this.radio_hasbeen = false;
    } else if (val == 2) {
      console.log(val);
      this.radio_asis = false;
      this.radio_tobe = false;
      this.radio_hasbeen = true;
    }
  }


}
