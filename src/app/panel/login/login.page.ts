import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../common/toast/toast.service';

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
    public component: any;
    public service: any;

    constructor(
        private routerP: Router,
        private toastServiceP: ToastService,
        private loginServiceP: LoginService,
    ) { const myThis = this; }

    ngOnInit() { const myThis = this; }

    ngAfterContentInit() {
        const myThis = this;
        myThis.init();
    }

    init() {
        const myThis = this;
        myThis.component = {};
        myThis.service = myThis.loginServiceP.init();

        myThis.component.form_login = {};
        myThis.component.form_login.is_processing = false;
        myThis.component.form_login.server_response = {};
        myThis.component.form_login.model = {};
        myThis.component.form_login.model.username = '';
        myThis.component.form_login.model.password = '';

        myThis.component.form_login.on_submit = (form_login) => {
            // alert('on_submit 1');
            myThis.component.form_login.is_processing = true;

            myThis.service.userLogin({
                username: myThis.component.form_login.model.username,
                password: myThis.component.form_login.model.password,
            }, (error_p, result_p) => {
                myThis.component.form_login.is_processing = false;
                myThis.component.form_login.server_response = {};

                if (error_p) {
                    if (error_p.error_description) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: error_p.error_description,
                            color: 'danger',
                        });
                        return;
                    }
                }
                if (result_p) {
                    if (((result_p.ResponseStatus === false) && result_p.ResponseMessage)) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: result_p.ResponseMessage,
                            color: 'danger',
                        });
                        return;
                    }

                    if (result_p.access_token) {
                        myThis.service.setUserSignedinData({ access_token: ('bearer ').concat(result_p.access_token) });
                        this.toastServiceP.toast_show({
                            message: 'Login Successful.',
                            duration: 2000,
                            color: 'success',
                        });
                        setTimeout(() => { myThis.routerP.navigate(['tabs/addvisit']); }, 1);
                        return;
                    }
                }
                return;
            });
        };
    }
}
