import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
declare var firebase: any;


@Component({
  selector: 'app-business-function',
  templateUrl: './business-function.component.html',
  styleUrls: ['./business-function.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class BusinessFunctionComponent implements OnInit {

  liste = [];
  bool = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  //this.dataService.fetchData().subscribe(
 //   (data) => this.liste = data
 // );
  this.fbGetData();
  }

fbGetData(){
  firebase.database().ref('/BFunctions/').on('child_added', (snapshot) => {
    this.liste.push(snapshot.val())
  }
)}

fbPostData(descr, name){
  firebase.database().ref('/BFunctions/').push({Descr: descr, Name: name});
}
  // https://www.youtube.com/watch?v=Fb9o2uwRAk0 minute 3:24 erkl
  //ärung zu root verzeichnis etc.

}



