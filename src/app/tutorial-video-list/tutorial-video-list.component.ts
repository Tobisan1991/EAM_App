import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-video-list',
  templateUrl: './tutorial-video-list.component.html',
  styleUrls: ['./tutorial-video-list.component.css']
})
export class TutorialVideoListComponent implements OnInit {
  
  videoList = [{
    // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
    name: "Video 1",
    slug: "video-1"
  },
  {
    name: "Video 2",
    slug: "video-2"
  },{
    name: "Video 3",
    slug: "video-3"
  } ];
  constructor() { }
  
    ngOnInit() {
    }

}
