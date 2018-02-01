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


  activeGeos2 = [];
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



      // 



