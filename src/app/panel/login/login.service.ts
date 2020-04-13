import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { configApp } from '../configs/configApp';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public service: any = {};

    constructor(
        private httpP: HttpClient,
        // private alertServiceP: AlertService,
    ) { const myThis = this; }

    init() {
        const myThis = this;
        myThis.service = {};

        myThis.service.userLogin = (data_p, cb) => {
            const data_usp = new URLSearchParams();
            data_usp.append('grant_type', encodeURIComponent("password"));
            data_usp.append('username', encodeURIComponent(data_p.username));
            data_usp.append('password', encodeURIComponent(data_p.password));
            data_p = data_usp.toString();

            myThis.httpP.post((configApp.SERVER_API_URL).concat('/token'), data_p, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            }).subscribe((resultP: any) => {
                cb(null, resultP);
                return;
            }, (errorP: any) => {
                cb(((errorP.error) ? errorP.error : errorP), null);
                return;
            });
        };


        myThis.service.setUserSignedinData = (data) => {
            // alert('setUserSignedinData');

            localStorage.setItem('ud', btoa(JSON.stringify(data)));
        };


        myThis.service.getUserSignedinData = () => {
            // alert('getUserSignedinData');

            if (!localStorage.getItem('ud')) {
                // alert('getUserSignedinData 1');
                return {};
            }

            // alert('getUserSignedinData 2');
            return JSON.parse(atob(localStorage.getItem('ud')));
        };

        myThis.service.userSignout = (is_reload) => {
            // alert('userSignout');
            localStorage.clear();
            if (is_reload) {
                window.location.reload();
            }
        };

        myThis.service.isUserLogin = () => {
            // alert('isUserLogin');
            const userData = myThis.service.getUserSignedinData();

            if (userData && userData.access_token) {
                return true;
            }

            localStorage.clear();
            return false;
        };


        //
        return myThis.service;
    }
}
