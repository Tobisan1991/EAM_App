import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageListComponent implements OnInit {

  title = 'Hier kommt unsere Image Liste: '
  constructor() { }

  ngOnInit() {[ {
    "productId":1,
    "productName":"Beauty Products",
    "productCode": "XXXXXX",            
    "description":  "Skin Care",           
    "imageUrl":"app/images/1.png"
 },
{
     "productId":2,
    "productName":"Samsung Galaxy J5",
    "productCode": "MOB-124",      
    "description":  "8GB, Gold",
    "imageUrl":"app/images/2.png"
 }]
    
  }

 onCreate(){ [ {
    "productId":1,
    "productName":"Beauty Products",
    "productCode": "XXXXXX",            
    "description":  "Skin Care",           
    "imageUrl":"app/images/1.png"
 },
{
     "productId":2,
    "productName":"Samsung Galaxy J5",
    "productCode": "MOB-124",      
    "description":  "8GB, Gold",
    "imageUrl":"app/images/2.png"
 }]}


}
