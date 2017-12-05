import { Injectable } from "@angular/core";
import {BusinessFunction} from "./businessfunction";
import { BUSINESSFUNCTIONS } from "./mock-function";

@Injectable()
export class businessfunctionService{

    getbf(){
        return Promise.resolve(BUSINESSFUNCTIONS);
    }

    insertbf(bftoinsert: BusinessFunction){
    Promise.resolve(BUSINESSFUNCTIONS).then((bf : BusinessFunction[]) => bf.push(bftoinsert));

    }



}

