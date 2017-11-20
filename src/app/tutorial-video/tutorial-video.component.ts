import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-video',
  templateUrl: './tutorial-video.component.html',
  styleUrls: ['./tutorial-video.component.css']
})
export class TutorialVideoComponent implements OnInit, OnDestroy{
  private routeSub:any;
  slug:string;
  title = "Video Tutorials";
  
    constructor(private route: ActivatedRoute) { }
    
      ngOnInit() {
       this.routeSub = this.route.params.subscribe(params=> {
     //     console.log(params)
          this.slug = params['slug']
        })
      }
      ngOnDestroy(){
        this.routeSub.unsubscribe();
      }

}
