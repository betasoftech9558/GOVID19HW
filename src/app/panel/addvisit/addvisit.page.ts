import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../common/toast/toast.service';
import { GeolocationService } from '../common/geolocation/geolocation.service';

import { AddVisitService } from './addvisit.service';


@Component({
    selector: 'app-addvisit',
    templateUrl: './addvisit.page.html',
    styleUrls: ['./addvisit.page.scss'],
})
export class AddVisitPage implements OnInit {
    public component: any;
    public service: any;

    constructor(
        private routerP: Router,
        private toastServiceP: ToastService,
        private geolocationServiceP: GeolocationService,
        private addVisitServiceP: AddVisitService,
    ) { const myThis = this; }

    ngOnInit() { const myThis = this; }
    ngAfterContentInit() {
        const myThis = this;
        myThis.init();
    }

    /*ionViewWillEnter() {
        const myThis = this;
        myThis.init();
    }*/

    init() {
        console.log('init() called ----- ');
        const myThis = this;
        myThis.component = {};
        myThis.service = myThis.addVisitServiceP.init();

        myThis.component.form_visit_add = {};
        myThis.component.form_visit_add.is_processing = false;
        myThis.component.form_visit_add.server_response = {};
        myThis.component.form_visit_add.model = {};

        myThis.component.form_visit_add.model_reset = () => {
            myThis.component.form_visit_add.model.Name = '';
            myThis.component.form_visit_add.model.ContactNumber = '';
            myThis.component.form_visit_add.model.Age = '';
            myThis.component.form_visit_add.model.Gender = 0;
            myThis.component.form_visit_add.model.Addresss = '';
            myThis.component.form_visit_add.model.Pincode = '';
            myThis.component.form_visit_add.model.haveDiabetes = 0;
            myThis.component.form_visit_add.model.daysDiabetes = '';
            myThis.component.form_visit_add.model.haveBP = 0;
            myThis.component.form_visit_add.model.daysBP = '';
            myThis.component.form_visit_add.model.haveHeartProblem = 0;
            myThis.component.form_visit_add.model.daysHeartProblem = '';
            myThis.component.form_visit_add.model.haveLungsProblem = 0;
            myThis.component.form_visit_add.model.daysLungsProblem = '';
            myThis.component.form_visit_add.model.haveKidenyProblem = 0;
            myThis.component.form_visit_add.model.daysKidenyProblem = '';
            myThis.component.form_visit_add.model.haveCough = 0;
            myThis.component.form_visit_add.model.daysCough = '';
            myThis.component.form_visit_add.model.haveDryCough = 0;
            myThis.component.form_visit_add.model.daysDryCough = '';
            myThis.component.form_visit_add.model.haveSoreThroat = 0;
            myThis.component.form_visit_add.model.daysSoreThroat = '';
            myThis.component.form_visit_add.model.haveSmellProblem = 0;
            myThis.component.form_visit_add.model.daysSmellProblem = '';
            myThis.component.form_visit_add.model.haveBreathProblem = 0;
            myThis.component.form_visit_add.model.daysBreathProblem = '';
            myThis.component.form_visit_add.model.haveBodyPain = 0;
            myThis.component.form_visit_add.model.daysBodyPain = '';
            myThis.component.form_visit_add.model.haveChestPain = 0;
            myThis.component.form_visit_add.model.daysChestPain = '';
            myThis.component.form_visit_add.model.haveDiarrheoa = 0;
            myThis.component.form_visit_add.model.daysDiarrheoa = '';
            myThis.component.form_visit_add.model.haveFever = 0;
            myThis.component.form_visit_add.model.daysFever = '';
            myThis.component.form_visit_add.model.IsSOS = false;
            myThis.component.form_visit_add.model.latitude = '';
            myThis.component.form_visit_add.model.longitude = '';
        };

        myThis.component.form_visit_add.model_reset();

        myThis.component.form_visit_add.on_submit = (form_visit_add) => {
            this.geolocationServiceP.get_current_latitude_longitude(( error_p, result_p ) => {
                if ( error_p ) {
                    console.log('get_current_latitude_longitude - error_p ----- ', error_p);
                }
                if ( result_p ) {
                    myThis.component.form_visit_add.model.latitude = result_p.latitude;
                    myThis.component.form_visit_add.model.longitude = result_p.longitude;

                    myThis.component.form_visit_add.is_processing = true;
                    myThis.service.visit_add(myThis.component.form_visit_add.model, ( error_p, result_p ) => {
                        myThis.component.form_visit_add.model_reset();
                        myThis.component.form_visit_add.is_processing = false;
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
                                this.toastServiceP.toast_show({
                                    duration: 2000,
                                    message: 'Visit added successful',
                                    color: 'success',
                                });
                                return;
                            }
                        }
                        return;
                    });
                }
                console.log(myThis.component.form_visit_add.model);
            });
            return;
        };
    }
}
