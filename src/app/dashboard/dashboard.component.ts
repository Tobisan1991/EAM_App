import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { SearchNamePipe } from '../search-name.pipe';
import { LoginComponent } from '../login/login.component';
import { NavbarService } from '../navbar.service';

declare var firebase: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService, SearchNamePipe, LoginComponent],
})
export class DashboardComponent implements OnInit {

  USA = false;
  ITALY = false;
  GERMANY = false;
  POLAND = false;
  UK = false;
  SPAIN = false;
  BRAZIL = false;
  FRANCE = false;
  MEXICO = false;


  activeGeos2 = [];
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private searchName: SearchNamePipe,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.fbGetGeo();
  }
  /*

  public doughnutChartLabels:string[] = ['Capabilities', 'Application Systems', 'Applications'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  */

  
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['Capabilities', 'Application Systems', 'Applications'];
  public pieChartData:number[] = [300, 500, 100];
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



  //////////////////////// LANDKARTE


  fbGetGeo() {
    const rootRef = firebase.database().ref();
    const maintable = rootRef.child('Application/').orderByChild('CFlag').equalTo('active');
    maintable.on('child_added', snap => {
      if (snap.val()) { console.log(snap.val()) }
      // console.log(this.liste)


      let geographys = rootRef.child('/Application/' + snap.key + '/IGeography');

      geographys.once('value').then(activeGeos => {
        if (activeGeos.val()) {
          this.activeGeos2.push(activeGeos.val())
          console.log(this.activeGeos2);
        }


        console.log(this.activeGeos2.length-1)
        if (this.activeGeos2[this.activeGeos2.length-1] == "DE" ){
          this.GERMANY = true;
         }
        if(this.activeGeos2[this.activeGeos2.length-1] == "US"){
           this.USA = true;
         }
         if(this.activeGeos2[this.activeGeos2.length-1] == "IT"){
           this.ITALY = true;
         }
         if(this.activeGeos2[this.activeGeos2.length-1] == "UK"){
           this.UK = true;
         }
         if(this.activeGeos2[this.activeGeos2.length-1] == "PL"){
           this.POLAND = true;
         }
         if(this.activeGeos2[this.activeGeos2.length-1] == "BR"){
           this.BRAZIL = true;
         }
         if(this.activeGeos2[this.activeGeos2.length-1] == "ES"){
           this.SPAIN = true;
         }
         if(this.activeGeos2[this.activeGeos2.length-1] == "FR"){
           this.FRANCE = true;
         }

      })
      
    })

    

  }


}
