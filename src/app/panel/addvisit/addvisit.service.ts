import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginService } from '../login/login.service';

import { configApp } from '../configs/configApp';


@Injectable({
    providedIn: 'root'
})
export class AddVisitService {
    public service: any = {};

    constructor(
        private httpP: HttpClient,
        private loginServiceP: LoginService,
    ) { const myThis = this; }

    init() {
        const myThis = this;
        myThis.service = {};
        myThis.service.login = myThis.loginServiceP.init();

        myThis.service.visit_list_get = (data_p, cb) => {
            const userdata = myThis.service.login.getUserSignedinData();
            if (!(userdata && userdata.access_token)) {
                myThis.service.login.userSignout(true);
            } else {
                myThis.httpP.post((configApp.SERVER_API_URL).concat('/api/Visits/GetByUserForDate'), data_p, {
                    headers: new HttpHeaders({
                        'Authorization': userdata.access_token,
                    })
                }).subscribe((resultP: any) => {
                    cb(null, resultP);
                    return;
                }, (errorP: any) => {
                    cb(((errorP.error) ? errorP.error : errorP), null);
                    return;
                });
            }
        };

        myThis.service.visit_add = (data_p, cb) => {
            const userdata = myThis.service.login.getUserSignedinData();
            if (!(userdata && userdata.access_token)) {
                myThis.service.login.userSignout(true);
            } else {
                myThis.httpP.post((configApp.SERVER_API_URL).concat('/api/Survey/SaveSurvey'), data_p, {
                    headers: new HttpHeaders({
                        'Authorization': userdata.access_token,
                    })
                }).subscribe((resultP: any) => {
                    cb(null, resultP);
                    return;
                }, (errorP: any) => {
                    cb(((errorP.error) ? errorP.error : errorP), null);
                    return;
                });
            }
        };

        //
        return myThis.service;
    }
}
