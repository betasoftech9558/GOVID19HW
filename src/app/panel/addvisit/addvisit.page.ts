import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../common/alert/alert.service';
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
        private alertServiceP: AlertService,
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
        myThis.component.form_visit_add.model_error = {};

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

        myThis.component.form_visit_add.model_error_reset = () => {
            myThis.component.form_visit_add.model_error.Name = {errors: []};
            myThis.component.form_visit_add.model_error.ContactNumber = {errors: []};
            myThis.component.form_visit_add.model_error.Age = {errors: []};
            myThis.component.form_visit_add.model_error.Gender = {errors: []};
            myThis.component.form_visit_add.model_error.Addresss = {errors: []};
            myThis.component.form_visit_add.model_error.Pincode = {errors: []};
            myThis.component.form_visit_add.model_error.haveDiabetes = {errors: []};
            myThis.component.form_visit_add.model_error.daysDiabetes = {errors: []};
            myThis.component.form_visit_add.model_error.haveBP = {errors: []};
            myThis.component.form_visit_add.model_error.daysBP = {errors: []};
            myThis.component.form_visit_add.model_error.haveHeartProblem = {errors: []};
            myThis.component.form_visit_add.model_error.daysHeartProblem = {errors: []};
            myThis.component.form_visit_add.model_error.haveLungsProblem = {errors: []};
            myThis.component.form_visit_add.model_error.daysLungsProblem = {errors: []};
            myThis.component.form_visit_add.model_error.haveKidenyProblem = {errors: []};
            myThis.component.form_visit_add.model_error.daysKidenyProblem = {errors: []};
            myThis.component.form_visit_add.model_error.haveCough = {errors: []};
            myThis.component.form_visit_add.model_error.daysCough = {errors: []};
            myThis.component.form_visit_add.model_error.haveDryCough = {errors: []};
            myThis.component.form_visit_add.model_error.daysDryCough = {errors: []};
            myThis.component.form_visit_add.model_error.haveSoreThroat = {errors: []};
            myThis.component.form_visit_add.model_error.daysSoreThroat = {errors: []};
            myThis.component.form_visit_add.model_error.haveSmellProblem = {errors: []};
            myThis.component.form_visit_add.model_error.daysSmellProblem = {errors: []};
            myThis.component.form_visit_add.model_error.haveBreathProblem = {errors: []};
            myThis.component.form_visit_add.model_error.daysBreathProblem = {errors: []};
            myThis.component.form_visit_add.model_error.haveBodyPain = {errors: []};
            myThis.component.form_visit_add.model_error.daysBodyPain = {errors: []};
            myThis.component.form_visit_add.model_error.haveChestPain = {errors: []};
            myThis.component.form_visit_add.model_error.daysChestPain = {errors: []};
            myThis.component.form_visit_add.model_error.haveDiarrheoa = {errors: []};
            myThis.component.form_visit_add.model_error.daysDiarrheoa = {errors: []};
            myThis.component.form_visit_add.model_error.haveFever = {errors: []};
            myThis.component.form_visit_add.model_error.daysFever = {errors: []};
        };

        myThis.component.form_visit_add.model_error_reset();

        myThis.component.form_visit_add.validate = () => {
            let is_valid = true;
            myThis.component.form_visit_add.model_error_reset();
            if ( myThis.component.form_visit_add.model.Name.toString().trim() === '' ) {
                myThis.component.form_visit_add.model_error.Name.errors.push({ message: 'Full Name is required' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.ContactNumber.toString().trim() === '' ) {
                myThis.component.form_visit_add.model_error.ContactNumber.errors.push({ message: 'Contact Number is required' });
                is_valid = false;
            }
            if ( myThis.component.form_visit_add.model.ContactNumber.toString().trim().length !== 10 ) {
                myThis.component.form_visit_add.model_error.ContactNumber.errors.push({ message: 'Contact Number length must be 10' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.Age.toString().trim() === '' ) {
                myThis.component.form_visit_add.model_error.Age.errors.push({ message: 'Age is required' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.Age.toString().trim().length < 1) || (myThis.component.form_visit_add.model.Age.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.Age.errors.push({ message: 'Age length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.Gender === 0 ) {
                myThis.component.form_visit_add.model_error.Gender.errors.push({ message: 'Gender is required' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.Addresss.toString().trim() === '' ) {
                myThis.component.form_visit_add.model_error.Addresss.errors.push({ message: 'Addresss is required' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.Pincode.toString().trim() === '' ) {
                myThis.component.form_visit_add.model_error.Pincode.errors.push({ message: 'Pincode is required' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveDiabetes === 0 ) {
                myThis.component.form_visit_add.model_error.haveDiabetes.errors.push({ message: 'Have Diabetes or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysDiabetes.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysDiabetes.errors.push({ message: 'Diabetes days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveBP === 0 ) {
                myThis.component.form_visit_add.model_error.haveBP.errors.push({ message: 'Have BP or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysBP.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysBP.errors.push({ message: 'BP days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveHeartProblem === 0 ) {
                myThis.component.form_visit_add.model_error.haveHeartProblem.errors.push({ message: 'Have Heart Problem or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysHeartProblem.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysHeartProblem.errors.push({ message: 'HeartProblem days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveLungsProblem === 0 ) {
                myThis.component.form_visit_add.model_error.haveLungsProblem.errors.push({ message: 'Have Lungs Problem or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysLungsProblem.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysLungsProblem.errors.push({ message: 'LungsProblem days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveKidenyProblem === 0 ) {
                myThis.component.form_visit_add.model_error.haveKidenyProblem.errors.push({ message: 'Have Kidney Problem or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysKidenyProblem.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysKidenyProblem.errors.push({ message: 'KidenyProblem days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveCough === 0 ) {
                myThis.component.form_visit_add.model_error.haveCough.errors.push({ message: 'Have Cough or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysCough.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysCough.errors.push({ message: 'Cough days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveDryCough === 0 ) {
                myThis.component.form_visit_add.model_error.haveDryCough.errors.push({ message: 'Have Dry Cough or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysDryCough.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysDryCough.errors.push({ message: 'DryCough days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveSoreThroat === 0 ) {
                myThis.component.form_visit_add.model_error.haveSoreThroat.errors.push({ message: 'Have Sore Throat or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysSoreThroat.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysSoreThroat.errors.push({ message: 'SoreThroat days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveSmellProblem === 0 ) {
                myThis.component.form_visit_add.model_error.haveSmellProblem.errors.push({ message: 'Have Smell Problem or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysSmellProblem.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysSmellProblem.errors.push({ message: 'SmellProblem days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveBreathProblem === 0 ) {
                myThis.component.form_visit_add.model_error.haveBreathProblem.errors.push({ message: 'Have Breath Problem or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysBreathProblem.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysBreathProblem.errors.push({ message: 'BreathProblem days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveBodyPain === 0 ) {
                myThis.component.form_visit_add.model_error.haveBodyPain.errors.push({ message: 'Have Body Pain or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysBodyPain.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysBodyPain.errors.push({ message: 'BodyPain days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveChestPain === 0 ) {
                myThis.component.form_visit_add.model_error.haveChestPain.errors.push({ message: 'Have Chest Pain or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysChestPain.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysChestPain.errors.push({ message: 'ChestPain days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveDiarrheoa === 0 ) {
                myThis.component.form_visit_add.model_error.haveDiarrheoa.errors.push({ message: 'Have Diarrhea or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysDiarrheoa.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysDiarrheoa.errors.push({ message: 'Diarrheoa days length must be between 1 and 2' });
                is_valid = false;
            }

            if ( myThis.component.form_visit_add.model.haveFever === 0 ) {
                myThis.component.form_visit_add.model_error.haveFever.errors.push({ message: 'Have Fever or not?' });
                is_valid = false;
            }
            if ( (myThis.component.form_visit_add.model.daysFever.toString().trim().length > 2) ) {
                myThis.component.form_visit_add.model_error.daysFever.errors.push({ message: 'Fever days length must be between 1 and 2' });
                is_valid = false;
            }


            return is_valid;
            // return (errors.models.length > 0) ? errors.models : true;
            // return true;
        };

        myThis.component.form_visit_add.on_submit = (form_visit_add) => {
            myThis.component.form_visit_add.model_error = {};
            const form_visit_add_validate = myThis.component.form_visit_add.validate();
            console.log('form_visit_add_validate ----- ', form_visit_add_validate);
            if ( form_visit_add_validate === true ) {
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
                });
            } else {
                console.log('myThis.component.form_visit_add.model ----- ', myThis.component.form_visit_add.model);
                console.log('myThis.component.form_visit_add.model_error ----- ', myThis.component.form_visit_add.model_error);
                myThis.alertServiceP.alert_show({
                    message: 'Please, review all fields again',
                    buttons: ['OK'],
                });
                // myThis.component.form_visit_add.model_error = form_visit_add_validate;
            }

            return;
        };
    }
}
