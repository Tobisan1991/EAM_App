import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-video-list',
  templateUrl: './tutorial-video-list.component.html',
  styleUrls: ['./tutorial-video-list.component.css']
})
export class TutorialVideoListComponent implements OnInit {
  
  videoList = [{
    // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
    name: "Einführungsvideo",
    slug: "video-1",
    embed:`6wD4V0rvlDI`
  },
  {
    name: "Fortgeschritten",
    slug: "video-2",
    embed: `6wD4V0rvlDI`
  },{
    name: "Perfection",
    slug: "video-3",
    embed: `nzyJ9imm29w`
  } ];
  constructor() { }
  
    ngOnInit() {
    }

    getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed
    }

}
