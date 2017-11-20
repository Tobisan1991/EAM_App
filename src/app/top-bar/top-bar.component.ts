import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy{
  private routeSub:any;
  slug:string;
  title = "Top Bar";
  
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