import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { SearchNamePipe } from '../search-name.pipe'
import { rootRoute } from '@angular/router/src/router_module';
import { LoginComponent } from '../login/login.component'
import { IMyOptions } from 'mydatepicker';


declare var firebase: any;
const d: Date = new Date();


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService, SearchNamePipe, LoginComponent]
})
export class Application implements OnInit {

  name: String;
  descr: String;
  datum: String;
  typ: String;
  liste = [];
  isDesc: boolean = false;
  column: string = 'Name';
  direction: number;
  loginName: String;
  dateFrom: string;
  dateTo: string;
  geography: string;
  version: string;
  radio_asis: boolean;
  radio_tobe: boolean;
  radio_hasbeen: boolean;
  statusForm: Boolean = false;

  private myDatePickerOptions: IMyOptions = {

    dateFormat: 'dd.mm.yyyy',

  };



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
    // console.log("openform " + this.openForm);
    console.log(this.statusForm);
  }

  fbGetData() {

    firebase.database().ref().child('/Application/').orderByChild('CFlag').equalTo('active').
      on('child_added', (snapshot) => {
        //firebase.database().ref('/Appsystem/').orderByKey().on('child_added', (snapshot) => {
        // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
        this.liste.push(snapshot.val())
      })
  }

  fbPostData(name, descr, dateFrom, dateTo, geography, version) {
    console.log(name, descr, dateFrom, dateTo, geography);
    // firebase.database().ref('/Appsystem/').push({Descr: descr, Name: name});
    firebase.database().ref().child('/Application/').child(name).set({
      AName: name, BDescr: descr, CFlag: 'active', DCreationDate: this.datum, GDateFrom: dateFrom, HDateTo: dateTo, IGeography: geography, JVersion: version //, created: this.creationDate, altered: 'none', removed: 'none'
    });
    this.name = '';
    this.descr = '';
    this.dateFrom = '';
    this.dateTo = '';
    this.geography = '';
    this.version = '';

  }

  fbDeleteData(key) {
    firebase.database().ref().child('/Application/').child(key).update({
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
