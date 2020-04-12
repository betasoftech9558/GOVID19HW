import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { configApp } from '../../configs/configApp';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private httpP: HttpClient,
  ) { const myThis = this; }


  post(dataLogin, cb) { const myThis = this;
    myThis.httpP.post((configApp.SERVER_API_URL).concat('/token'), dataLogin, {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }).subscribe(( resultP: any ) => {
        cb(null, resultP);
        return;
    }, ( errorP: any ) => {
        cb( ((errorP.error) ? errorP.error : errorP), null);
        return;
    });
  }
}
