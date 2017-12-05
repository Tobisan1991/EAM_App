import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-video-list',
  templateUrl: './tutorial-video-list.component.html',
  styleUrls: ['./tutorial-video-list.component.css']
})
export class TutorialVideoListComponent implements OnInit {
  
  @Input()
  passedlink: string;

  
  videoList = [{
    // HIER KOMMT DANN DIE DATENBANK ANBINDUNG Z.B. REIN
    name: "Einführungsvideo",
    slug: "video-1",
    embed:`6wD4V0rvlDI`,
    text: "hier kommt der Text zu Tutorial 1"
  },
  {
    name: "Fortgeschritten",
    slug: "video-2",
    embed: `nzyJ9imm29w`,
    text: "hier kommt der Text zu Tutorial 2"
  },{
    name: "Perfection",
    slug: "video-3",
    embed: `lYvmbQiFnXE`,
    text: "hier kommt der Text zu Tutorial 3"
  } ];
  constructor() { }
  
    ngOnInit() {

      console.log(this.passedlink);
    }

    getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed
    }

}
