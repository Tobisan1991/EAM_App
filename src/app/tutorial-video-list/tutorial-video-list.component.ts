import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-tutorial-video-list',
  templateUrl: './tutorial-video-list.component.html',
  styleUrls: ['./tutorial-video-list.component.css']
})
export class TutorialVideoListComponent implements OnInit {
  
  videoList = [{
    // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
    name: "Video 1",
    slug: "video-1",
    embed:`6wD4V0rvlDI`
  },
  {
    name: "Video 2",
    slug: "video-2",
    embed: `6wD4V0rvlDI`
  },{
    name: "Video 3",
    slug: "video-3",
    embed: `nzyJ9imm29w`
  } ];
  constructor(private sanitizer: DomSanitizer) { }
  
    ngOnInit() {
    }

    getEmbedUrl(item){
return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed)
    }

}
