import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../data.service';
import { Http, HttpModule } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { Router, ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/map';


declare var firebase: any;
@Component({
  selector: 'app-bp-list',
  templateUrl: './bp-list.component.html',
  styleUrls: ['./bp-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class BpListComponent implements OnInit {
  private sub: any;
  private ID: string;
  name;
  descr;
  typ:String;
  creationDate:String;
  datum:String;
  bprocessliste=[];
  applicationliste=[];

private editData = [];

  constructor(private dataService: DataService,
    private router: Router, private route: ActivatedRoute, public http: Http) {

      this.datum=Date().toString();
      
  }
  
  

  ngOnInit() {
    this.fbGetData();

    firebase.database().ref().child('/BProcess/').orderByChild('CFlag').equalTo('active').
    on('child_added', (snapshot) => {  

    this.bprocessliste.push(snapshot.val())
    });


    }
    

  fbGetData(){
    this.sub = this.route.params.subscribe(params=> {
      this.ID = params['name']
     })
     firebase.database().ref().child('/BProcess/'+this.ID+'/').on('child_added', (snapshot) => {
     this.editData.push(snapshot.val())
    }
      
    )
    console.log(this.editData);
    this.name = this.editData[0];
    // console.log(this.editData[0]);
    this.descr = this.editData[1];
    this.creationDate = this.editData[3];
    // this.bprocessliste = this.editData[5];
    // this.applicationliste = this.editData[6];
    // console.log(this.descr);
    // console.log(this.name);
    // console.log(this.editData);
    
}

    fbEditData(name,descr){
      // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
       firebase.database().ref().child('/BProcess/').child(this.ID).set({
         AName: name ,BDescr: descr, CFlag: 'active', DCreationDate: this.creationDate,  KEditDate: this.datum,
         });
     }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }
}
