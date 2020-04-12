import { Injectable } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

    constructor(
        private alertControllerP: AlertController,
    ) { }


    alert_show( options_p ) {
        this.alertControllerP.create(options_p).then((alertElementP) => {
            alertElementP.present();
            return;
        });

        return;
    }
}
