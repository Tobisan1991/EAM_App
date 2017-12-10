import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Application } from './application/application.component';

@Injectable()
export class DbService {
  applications=[];
  private _serverUrl: string = "http://localhost/api/";
  constructor(private _http:Http) { }

  // https://www.youtube.com/watch?v=1JE_dyQkL0g&index=12&list=PLZURtcoL43SXSdd0xgeTLyD0W9O2Sr_je

  getData(){
    return this._http.get(this._serverUrl+'select.php').
    map((response:Response) => response.json());
    
  }
  addData(data : Application){
    return this._http.post(this._serverUrl+'insert.php',{'data':data}).
    map(() => "");
  }
  deleteData(id){
    return this._http.post(this._serverUrl+'delete.php',{'id':id}).
    map(() => this.getData());
  }
  update(data){
    return this._http.put(this._serverUrl+'update.php',{'data':data}).
    map(() => "");
  }
  // Wenn man nur einen Datensatz auswählen will 
  getDate(id){
    return this._http.post(this._serverUrl+'selectone.php',{'id':id}).
    map((response:Response) => response.json)
  }


}
