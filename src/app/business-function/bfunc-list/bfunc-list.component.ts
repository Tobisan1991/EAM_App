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
test = 'asdsad';
ID: string;
  Name;
  Descr;
  

private editData = [];

  constructor(private dataService: DataService,
    private router: Router, private route: ActivatedRoute, public http: Http) {
      
  }
  
  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params=> {
       this.ID = params['name']
      })
      //console.log(this.Name);
    this.fbGetData();
    }
    
   


  fbGetData(){
    
 firebase.database().ref().child('/BFunctions/'+this.ID+'/').on('child_added', (snapshot) => {
     // firebase.database().ref().child('/BFunctions/'+this.ID+'/').subscribe(listing => {
        
       //firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
     
//       this.Name = listing.name
  //     this.Descr = listing.descr
     this.editData.push(snapshot.val())
    }
      
    )

    console.log(this.editData);
    }


    ngOnDestroy(){
      this.sub.unsubscribe();
    }
}
