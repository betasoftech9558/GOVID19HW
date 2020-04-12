import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

    constructor(
        private toastControllerP: ToastController,
    ) { }


    toast_show( options_p ) {
        this.toastControllerP.create(options_p).then((toastElementP) => {
            toastElementP.present();
            return;
        });

        return;
    }

    /*async toast_show( options_p ) {
        const toast = await this.toastControllerP.create(options_p);
        toast.present();
    }*/
}
