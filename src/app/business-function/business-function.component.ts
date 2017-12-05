import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Http } from '@angular/http';

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
  this.dataService.fetchData().subscribe(
    (data) => this.liste = data
  );
  }



}
