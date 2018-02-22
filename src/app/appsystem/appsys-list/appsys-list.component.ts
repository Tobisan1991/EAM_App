import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../data.service';
import { Http, HttpModule } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { IMyOptions } from 'mydatepicker';
import 'rxjs/add/operator/map';


declare var firebase: any;

@Component({
  selector: 'app-appsys-list',
  templateUrl: './appsys-list.component.html',
  styleUrls: ['./appsys-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})

export class AppsysListComponent implements OnInit {
  private sub2: any;
  private ID: string;
  name;
  ansprechpartner: String;
  descr;
  typ:String;
  creationDate:String;
  datum:String;
  geography: string;
  version: string;
  isDesc: boolean = false;
  column: string = 'Name';
  direction: number;
  loginName: String;
  dateFrom: string;
  dateTo: string;
  radio_asis: boolean;
  radio_tobe: boolean;
  radio_hasbeen: boolean;
  statusForm: Boolean = false;
  applicationliste=[];
  applications;

private editData = [];

private myDatePickerOptions: IMyOptions = {

  dateFormat: 'dd.mm.yyyy',

};
constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, public http: Http) {

    this.datum=Date().toString();
    
}

ngOnInit() {
  this.fbGetData();

  firebase.database().ref().child('/Application/').orderByChild('CFlag').equalTo('active').
  on('child_added', (snapshot) => {  

  this.applicationliste.push(snapshot.val())
  }); 

  }

  fbGetData(){
    this.sub2 = this.route.params.subscribe(params=> {
      this.name = params['name']
      console.log(this.name);
     })
     console.log(this.name);

     firebase.database().ref().child('/Appsystem/'+this.name).on('child_added', (snapshot) => {
        //firebase.database().child('/BFunctions/'+this.ID+'/').on('child_added', (snapshot) => {
     this.editData.push(snapshot.val())
     console.log(this.editData);
    }
      
    )
    console.log(this.editData);
    this.name = this.editData[0];
    // console.log(this.editData[0]);
    this.descr = this.editData[1];
    this.ansprechpartner=this.editData[4];
    this.creationDate = this.editData[3];
 
    
    // this.bprocessliste = this.editData[5];
    // this.applicationliste = this.editData[6];
    // console.log(this.descr);
    // console.log(this.name);
    // console.log(this.editData);
    
}

fbEditData(name, descr, application, ansprechpartner){
  // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
   firebase.database().ref().child('/Appsystem/').child(this.name).set({
    AName: name ,BDescr: descr, CFlag: 'active', DCreationDate: this.creationDate, KEditDate: this.datum, EAnsprechpartner:ansprechpartner, FApplication:application
     });
 }

ngOnDestroy(){
  this.sub2.unsubscribe();
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
