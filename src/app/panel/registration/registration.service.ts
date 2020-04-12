import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { configApp } from '../configs/configApp';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    public service: any = {};

    constructor(
        private httpP: HttpClient,
    ) { const myThis = this; }

    init() {
        const myThis = this;
        myThis.service = {};

        console.log('configApp ----- ', configApp);

        myThis.service.otp_get = (data_p, cb) => {
            myThis.httpP.post((configApp.SERVER_API_URL).concat('/api/User/GetOTP'), data_p).subscribe((resultP: any) => {
                cb(null, resultP);
                return;
            }, (errorP: any) => {
                cb(((errorP.error) ? errorP.error : errorP), null);
                return;
            });
        };

        myThis.service.otp_verify = (data_p, cb) => {
            myThis.httpP.post((configApp.SERVER_API_URL).concat('/api/User/VerifyOTP'), data_p).subscribe((resultP: any) => {
                cb(null, resultP);
                return;
            }, (errorP: any) => {
                cb(((errorP.error) ? errorP.error : errorP), null);
                return;
            });
        };

        myThis.service.register_user = (data_p, cb) => {
            myThis.httpP.post((configApp.SERVER_API_URL).concat('/api/User/RegisterUser'), data_p).subscribe((resultP: any) => {
                cb(null, resultP);
                return;
            }, (errorP: any) => {
                cb(((errorP.error) ? errorP.error : errorP), null);
                return;
            });
        };

        //
        return myThis.service;
    }
}
