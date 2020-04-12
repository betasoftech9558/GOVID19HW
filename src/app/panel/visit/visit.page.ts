import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../common/toast/toast.service';

import { VisitService } from '../visit/visit.service';

@Component({
    selector: 'app-visit',
    templateUrl: './visit.page.html',
    styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
    public component: any;
    public service: any;

    constructor(
        private routerP: Router,
        private toastServiceP: ToastService,
        private visitServiceP: VisitService,
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
        myThis.component.form_visit_add.is_visible = false;

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
                            message: 'Visit added successful',
                            color: 'success',
                        });
                        myThis.component.list_visit.get();
                        myThis.component.form_visit_add.is_visible = !myThis.component.form_visit_add.is_visible;
                        // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                        // setTimeout(() => { window.location.reload(); }, 2000);
                        return;
                    }
                }
                // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                // setTimeout(() => { window.location.reload(); }, 2000);
                return;
            });
        };

        myThis.component.list_visit = {};
        myThis.component.list_visit.list = {};
        myThis.component.list_visit.list.data = [];

        myThis.component.form_visit_list = {};
        myThis.component.form_visit_list.is_processing = false;
        myThis.component.form_visit_list.server_response = {};

        const today = new Date();
        myThis.component.form_visit_list.model = {};
        myThis.component.form_visit_list.model.visitDate = (today.getFullYear().toString()).concat('-').concat((today.getMonth() + 1).toString()).concat('-').concat(today.getDate().toString());

        myThis.component.list_visit.get = () => {
            myThis.component.form_visit_list.is_processing = true;
            myThis.service.visit_list_get(myThis.component.form_visit_list.model, (error_p, result_p) => {

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
                        myThis.component.list_visit.list.data = result_p.ResponseObject;
                        myThis.component.form_visit_list.is_processing = false;
                        return;
                    }
                }
                // setTimeout(() => { myThis.routerP.navigate(['']); }, 2000);
                // setTimeout(() => { window.location.reload(); }, 2000);
                return;
            });
        };
        myThis.component.list_visit.get();

        myThis.component.form_visit_list.on_change_visitdate = () => {
            console.log('on_change_visitdate -----');
            myThis.component.list_visit.get();
        };
    }
}
