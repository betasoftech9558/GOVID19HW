import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../common/toast/toast.service';
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
        private visitServiceP: AddVisitService,
    ) { const myThis = this; }

    ngOnInit() { const myThis = this; }

    ngAfterContentInit() {
        const myThis = this;
        myThis.init();
    }

    init() {
        const myThis = this;
        myThis.component = {};
        myThis.service = myThis.visitServiceP.init();

        myThis.component.form_visit_add = {};
        myThis.component.form_visit_add.is_processing = false;
        myThis.component.form_visit_add.server_response = {};
        myThis.component.form_visit_add.model = {};
        myThis.component.form_visit_add.model.Whom = '';
        myThis.component.form_visit_add.model.Contact = '';
        myThis.component.form_visit_add.model.Purpose = '';
        myThis.component.form_visit_add.model.Place = '';
        myThis.component.form_visit_add.model.VisitDatetime = '';

        myThis.component.form_visit_add.on_click_change_view = () => {
            myThis.component.form_visit_add.is_visible = !myThis.component.form_visit_add.is_visible;
        };

        myThis.component.form_visit_add.on_submit = (form_visit_add) => {
            myThis.component.form_visit_add.is_processing = true;

            myThis.service.visit_add(myThis.component.form_visit_add.model, (error_p, result_p) => {
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
                        myThis.component.list_visit.get();
                        myThis.component.form_visit_add.is_visible = !myThis.component.form_visit_add.is_visible;
                        return;
                    }
                }
                return;
            });
        };
    }
}
