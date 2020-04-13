import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../common/toast/toast.service';

import { LoginService } from '../login/login.service';
import { UserprofileService } from './userprofile.service';

@Component({
    selector: 'app-userprofile',
    templateUrl: 'userprofile.page.html',
    styleUrls: ['userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
    public component: any;
    public service: any;

    constructor(
        private routerP: Router,
        private toastServiceP: ToastService,
        private loginServiceP: LoginService,
        private userprofileServiceP: UserprofileService,
    ) { const myThis = this; }

    ngOnInit() { const myThis = this; }

    ngAfterContentInit() {
        const myThis = this;
        myThis.init();
    }

    init() {
        const myThis = this;
        myThis.component = {};
        myThis.service = myThis.userprofileServiceP.init();
        myThis.service.login = myThis.loginServiceP.init();

        myThis.component.form_userprofile = {};
        myThis.component.form_userprofile.is_processing = false;
        myThis.component.form_userprofile.server_response = {};
        myThis.component.form_userprofile.step_number = 1;

        myThis.component.form_userprofile.model = {};
        myThis.component.form_userprofile.model.UserID = '';
        myThis.component.form_userprofile.model.UserName = '';
        myThis.component.form_userprofile.model.DateofBirth = '';
        myThis.component.form_userprofile.model.Address = '';
        myThis.component.form_userprofile.model.Pincode = '';

        myThis.component.form_userprofile.userprofile_get = () => {
            myThis.service.userprofile_get((error_p, result_p) => {
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

                    if (result_p.ResponseStatus === true && result_p.ResponseObject) {
                        myThis.component.form_userprofile.model.UserID = (result_p.ResponseObject.UserID) ? result_p.ResponseObject.UserID : '';
                        myThis.component.form_userprofile.model.Name = (result_p.ResponseObject.Name) ? result_p.ResponseObject.Name : '';
                        myThis.component.form_userprofile.model.DateofBirth = (result_p.ResponseObject.DateofBirth) ? result_p.ResponseObject.DateofBirth : '';
                        myThis.component.form_userprofile.model.Address = (result_p.ResponseObject.Address) ? result_p.ResponseObject.Address : '';
                        myThis.component.form_userprofile.model.Pincode = (result_p.ResponseObject.Pincode) ? result_p.ResponseObject.Pincode : '';
                        return;
                    }
                }
                return;
            });
        };
        myThis.component.form_userprofile.userprofile_get();

        myThis.component.form_userprofile.on_submit = (form_userprofile) => {
            myThis.component.form_userprofile.is_processing = true;

            myThis.service.userprofile_update(myThis.component.form_userprofile.model, (error_p, result_p) => {
                myThis.component.form_userprofile.is_processing = false;
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
                    } else if (result_p.ResponseStatus === true) {
                        myThis.component.form_userprofile.userprofile_get();
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: result_p.ResponseMessage,
                            color: 'success',
                        });
                        return;
                    }
                }
                return;
            });
        };

        myThis.component.form_userprofile.on_click_logout = () => {
            myThis.service.login.userSignout(false);
            setTimeout(() => { myThis.routerP.navigate(['/login']); }, 2);
        }
    }
}
