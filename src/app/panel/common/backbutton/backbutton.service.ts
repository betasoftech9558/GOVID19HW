import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IonRouterOutlet } from '@ionic/angular';

import { AlertService } from '../alert/alert.service';
import { ToastService } from '../toast/toast.service';

@Injectable({
    providedIn: 'root'
})
export class BackbuttonService {
    backbutton_last_clicked_time = 0;
    exit_duration = 2000;

    constructor(
        private routerP: Router,
        private alertServiceP: AlertService,
        private toastServiceP: ToastService,
        )  { }

        on_press_backbutton( routerOutletsP ) {
            routerOutletsP.forEach((ionRouterOutletP: IonRouterOutlet) => {
                if ( (new Date().getTime() - this.backbutton_last_clicked_time) < this.exit_duration ) {
                    navigator['app'].exitApp();
                } else {
                    this.toastServiceP.toast_show({
                        message: 'Press one more time to exit',
                        duration: 2000,
                        color: 'danger',
                    });

                    this.backbutton_last_clicked_time = new Date().getTime();
                }
            });

            return;
        }
    }
