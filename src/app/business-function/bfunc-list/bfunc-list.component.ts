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
  

private editData = [];

  constructor(private dataService: DataService,
    private router: Router, private route: ActivatedRoute, public http: Http) {
      
  }
  
  

  ngOnInit() {
    this.fbGetData();
    }
    

  fbGetData(){
   
    this.sub = this.route.params.subscribe(params=> {
      this.ID = params['name']
     }) 

     firebase.database().ref().child('/BFunctions/'+this.ID+'/').on('child_added', (snapshot) => {
     // firebase.database().ref().child('/BFunctions/'+this.ID+'/').subscribe(listing => {
        
       //firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
     
//       this.Name = listing.name
  //     this.Descr = listing.descr
     this.editData.push(snapshot.val())
    }
      
    )
    this.name = this.editData[2];
    this.descr = this.editData[0];
    // console.log(this.descr);
    // console.log(this.name);
    // console.log(this.editData);
    }

    fbPostData(name,descr){
      // firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
       firebase.database().ref().child('/BFunctions/').child(name).set({
         Name: name ,Descr: descr, Flag: 'X'
         });
     }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }
}
