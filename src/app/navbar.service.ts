import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class NavbarService {

  visible = false;

  constructor() { }

  show(){
    this.visible = true;
  }

  hide(){
    this.visible = false;
  }

  isVisible(){
    return new Observable(observer => {
      observer.next(this.visible);
    });
  }

}
