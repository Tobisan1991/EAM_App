import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../data.service';
import { Http, HttpModule } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { Router, ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/map';


declare var firebase: any;
@Component({
  selector: 'app-bfunc-list',
  templateUrl: './bfunc-list.component.html',
  styleUrls: ['./bfunc-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class BfuncListComponent implements OnInit {
  private sub: any;
  private ID: string;
  name;
  descr;
  creationDate:String;
  datum:String;
  

private editData = [];

  constructor(private dataService: DataService,
    private router: Router, private route: ActivatedRoute, public http: Http) {

      this.datum=Date().toString();
      
  }
  
  

  ngOnInit() {
    this.fbGetData();

     
    }
    

  fbGetData(){
    this.sub = this.route.params.subscribe(params=> {
      this.ID = params['name']
     })
     firebase.database().ref().child('/BFunctions/'+this.ID+'/').on('child_added', (snapshot) => {
          
   //firebase.database().child('/BFunctions/'+this.ID+'/').on('child_added', (snapshot) => {
     this.editData.push(snapshot.val())
    }
      
    )
    console.log(this.editData);
    this.name = this.editData[0];
    this.descr = this.editData[1];
    this.creationDate = this.editData[3];
    // console.log(this.descr);
    // console.log(this.name);
    // console.log(this.editData);
    
}

    fbEditData(name,descr){
      // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
      firebase.database().ref().child('/BFunctions/'+this.ID+'/').update({CFlag: 'archived'//, removed: this.removeDate
    })

       firebase.database().ref().child('/BFunctions/').child(name).set({
         AName: name ,BDescr: descr, CFlag: 'active', DCreationDate: this.creationDate, EEditDate: this.datum
         });
     }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }
}
