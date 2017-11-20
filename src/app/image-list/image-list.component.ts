import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  title = 'Hier kommt unsere Image Liste: '
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(function(params){
      console.log(params)
    })

  }



}
