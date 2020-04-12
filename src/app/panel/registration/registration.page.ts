import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../common/toast/toast.service';

import { RegistrationService } from './registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: 'registration.page.html',
    styleUrls: ['registration.page.scss'],
})
export class RegistrationPage implements OnInit {
    public component: any;
    public service: any;

    constructor(
        private routerP: Router,
        private toastServiceP: ToastService,
        private registrationServiceP: RegistrationService,
    ) { const myThis = this; }

    ngOnInit() { const myThis = this; }

    ngAfterContentInit() {
        const myThis = this;
        myThis.init();
    }

    init() {
        const myThis = this;
        myThis.component = {};
        myThis.service = myThis.registrationServiceP.init();

        myThis.component.form_registration = {};
        myThis.component.form_registration.is_processing = false;
        myThis.component.form_registration.server_response = {};
        myThis.component.form_registration.step_number = 1;

        myThis.component.form_registration.model = {};
        myThis.component.form_registration.model.MobileNumber = '';
        myThis.component.form_registration.model.otp = '';
        myThis.component.form_registration.model.Password = '';
        myThis.component.form_registration.model.Password2 = '';
        myThis.component.form_registration.model.UserName = '';
        myThis.component.form_registration.model.DateofBirth = '';
        myThis.component.form_registration.model.Address = '';
        myThis.component.form_registration.model.Pincode = '';

        myThis.component.form_registration.otp_get = () => {
            myThis.component.form_registration.is_processing = true;

            myThis.service.otp_get({
                MobileNumber: myThis.component.form_registration.model.MobileNumber,
            }, (error_p, result_p) => {
                myThis.component.form_registration.is_processing = false;
                if (error_p) {
                    if (error_p.error_description) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: error_p.error_description,
                            color: 'danger',
                        });
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        // setTimeout(() => { window.location.reload(); }, 2000);
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
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        // setTimeout(() => { window.location.reload(); }, 2000);
                        return;
                    }

                    if (result_p.ResponseStatus === true && result_p.ResponseMessage) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: result_p.ResponseMessage,
                            color: 'success',
                        });

                        myThis.component.form_registration.is_processing = false;
                        myThis.component.form_registration.step_number += 1;
                        return;
                    }
                }
                // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                // setTimeout(() => { window.location.reload(); }, 2000);
                return;
            });
        };

        myThis.component.form_registration.otp_verify = () => {
            myThis.component.form_registration.is_processing = true;

            myThis.service.otp_verify({
                MobileNumber: myThis.component.form_registration.model.MobileNumber,
                OTP: myThis.component.form_registration.model.otp,
            }, (error_p, result_p) => {
                myThis.component.form_registration.is_processing = false;
                if (error_p) {
                    if (error_p.error_description) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: error_p.error_description,
                            color: 'danger',
                        });
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        //setTimeout(() => { window.location.reload(); }, 2000);
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
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        // setTimeout(() => { window.location.reload(); }, 2000);
                        return;
                    }

                    if (result_p.ResponseStatus === true && result_p.ResponseMessage) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: result_p.ResponseMessage,
                            color: 'success',
                        });

                        myThis.component.form_registration.is_processing = false;
                        myThis.component.form_registration.step_number += 1;
                        return;
                    }
                }
                // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                // setTimeout(() => { window.location.reload(); }, 2000);
                return;
            });
        };

        myThis.component.form_registration.verify_user_basic_detail = () => {
            myThis.component.form_registration.is_processing = true;

            if (!myThis.component.form_registration.model.Password) {
                myThis.component.form_registration.is_processing = false;

                this.toastServiceP.toast_show({
                    message: 'Enter Password',
                    duration: 2000,
                    color: 'danger',
                });
                return;
            }

            myThis.component.form_registration.is_processing = false;
            myThis.component.form_registration.step_number += 1;
        };

        myThis.component.form_registration.on_submit = (form_registration) => {
            myThis.component.form_registration.is_processing = true;

            myThis.service.register_user(myThis.component.form_registration.model, (error_p, result_p) => {
                myThis.component.form_registration.is_processing = false;
                if (error_p) {
                    if (error_p.error_description) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: error_p.error_description,
                            color: 'danger',
                        });
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        // setTimeout(() => { window.location.reload(); }, 2000);
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
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        // setTimeout(() => { window.location.reload(); }, 2000);
                        return;
                    }

                    if (result_p.ResponseStatus === true && result_p.ResponseObject) {
                        this.toastServiceP.toast_show({
                            duration: 2000,
                            message: 'Registration Successful.',
                            color: 'success',
                        });
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        // setTimeout(() => { window.location.reload(); }, 2000);
                        setTimeout(() => { myThis.routerP.navigate(['/login']); }, 1);
                        return;
                    }
                }
                // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                // setTimeout(() => { window.location.reload(); }, 2000);
                return;
            });
        };

        myThis.component.form_registration.on_click_next = () => {
            // step-1 get otp
            if (myThis.component.form_registration.step_number === 1) {
                myThis.component.form_registration.otp_get();
                return;
            }
            // /step-1 get otp

            // step-2 verify otp
            if (myThis.component.form_registration.step_number === 2) {
                myThis.component.form_registration.otp_verify();
                return;
            }
            // /step-2 verify otp

            // step-3 verify user basic detail
            if (myThis.component.form_registration.step_number === 3) {
                myThis.component.form_registration.verify_user_basic_detail();
                return;
            }
            // /step-3 verify user basic detail

            myThis.component.form_registration.step_number += 1;
        };

        myThis.component.form_registration.on_click_previous = () => {
            myThis.component.form_registration.step_number -= 1;
        };
    }
}
