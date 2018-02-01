import { Input, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { rootRoute } from '@angular/router/src/router_module';
import { SearchNamePipe } from '../search-name.pipe';
import { LoginComponent } from '../login/login.component';
import { NavbarService } from '../navbar.service';

declare var firebase: any;

@Component({
  selector: 'app-tutorial-video-list',
  templateUrl: './tutorial-video-list.component.html',
  styleUrls: ['./tutorial-video-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService, SearchNamePipe, LoginComponent]
})

export class TutorialVideoListComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private searchName: SearchNamePipe,
    private navbarService: NavbarService
  ) { }


  USA = false;
  ITALY = false;
  GERMANY = false;
  POLAND = false;
  UK = false;
  SPAIN = false;
  BRAZIL = false;
  FRANCE = false;
  MEXICO = false;


  activeGeos = [];
  liste = [];
  applicationlist = [];
  Processlist = [];
  ngOnInit() {
    this.bestfuncever()
    this.fbGetGeo();
    // console.log(this.liste);
    // console.log(this.applicationlist);
    // console.log(this.Processlist);
  }
  bestfuncever() {
    const rootRef = firebase.database().ref();
    const maintable = rootRef.child('/BFunctions/').orderByChild('CFlag').equalTo('active');
    maintable.on('child_added', snap => {
      if (snap.val()) {
        this.liste.push(snap.val());
      }
      // console.log(this.liste)
      let BFuncGBProcess = rootRef.child('BFunctions/' + snap.key + '/HApllication');
      BFuncGBProcess.once('value').then(Processes => {
        if (Processes.val()) {
          this.Processlist.push(Processes.val())
        }

        let BProess = rootRef.child('Application/' + Processes.val());
        BProess.once('value').then(Applications => {
          if (Applications.val()) {
            this.applicationlist.push(Applications.val())

          }
          let BProess = rootRef.child('Appsystem/' + Processes.val());
          BProess.once('value').then(Appsystems => {
            if (Appsystems.val()) {
              this.applicationlist.push(Appsystems.val());
            }
          })

        })
      })
    })
  }

  fbGetGeo() {
    const rootRef = firebase.database().ref();
    const maintable = rootRef.child('Application/').orderByChild('CFlag').equalTo('active');
    maintable.on('child_added', snap => {
      if (snap.val()) { }
      // console.log(this.liste)
      let geographys = rootRef.child('Application/' + snap.key + '/IGeography');
      geographys.once('value').then(activeGeos => {
        if (activeGeos.val()) {

          let geop = activeGeos
          geographys.once('value').then(activeGeos2 =>{
                this.activeGeos.push(activeGeos2.val())
            var tempGeo = tempGeo.push(activeGeos2.val());
            console.log(activeGeos2.val());
  
          })

        }
       
       
        

     
        
      })
    })
  }

  
}     
         
// if (tempGeo.equalTo = 'Germany' ){
//   this.GERMANY = true;
//  }
// if(activeGeos.val().equalTo = 'United States of America'){
//    this.USA = true;
//  }
//  if(activeGeos.val().equalTo = 'Italy'){
//    this.ITALY = true;
//  }
//  if(activeGeos.val().equalTo = 'United Kingom'){
//    this.UK = true;
//  }
//  if(activeGeos.val().equalTo = 'Poland'){
//    this.POLAND = true;
//  }
//  if(activeGeos.val().equalTo = 'Brazil'){
//    this.BRAZIL = true;
//  }
//  if(activeGeos.val().equalTo = 'Spain'){
//    this.SPAIN = true;
//  }
//  if(activeGeos.val().equalTo = 'France'){
//    this.FRANCE = true;
//  }