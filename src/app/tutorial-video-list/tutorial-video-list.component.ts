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


  liste = [];
  applicationlist = [];
  Processlist = [];
  ngOnInit() {
    this.bestfuncever()
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
              console.log(this.applicationlist)

            }
          })

        })
      })
    })
  }


}
  // fbGetData() {

  //   firebase.database().ref().child('/BFunctions/').orderByChild('CFlag').equalTo('active').
  //     on('child_added', (snapshot) => {
  //       //firebase.database().ref('/BFunctions/').orderByKey().on('child_added', (snapshot) => {
  //       // alter code ... neuer Code nimmt nur die Validen mit dem X Flag    
  //       this.liste.push(snapshot.val())
  //     })}


  // @Input()
  // passedlink: string;


  // videoList = [{
  //   // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
  //   name: "Einführungsvideo",
  //   slug: "video-1",
  //   embed:`6wD4V0rvlDI`,
  //   text: "hier kommt der Text zu Tutorial 1"
  // },
  // {
  //   name: "Fortgeschritten",
  //   slug: "video-2",
  //   embed: `nzyJ9imm29w`,
  //   text: "hier kommt der Text zu Tutorial 2"
  // },{
  //   name: "Perfection",
  //   slug: "video-3",
  //   embed: `lYvmbQiFnXE`,
  //   text: "hier kommt der Text zu Tutorial 3"
  // } ];


  //   ngOnInit() {

  //     console.log(this.passedlink);
  //   }

  //   getEmbedUrl(item){
  //   return 'https://www.youtube.com/embed/' + item.embed
  //   }