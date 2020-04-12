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
    routes_to_prevent_back_button_off = [ '/login', '/tabs/visit', '/tabs/userprofile' ];

  constructor(
    private routerP: Router,
    private alertServiceP: AlertService,
    private toastServiceP: ToastService,
  ) { }

  on_press_backbutton( routerOutletsP ) {
    /*this.alertServiceP.alert_show({
        message: 'backbutton press',
        buttons: ['OK']
    });*/

    routerOutletsP.forEach((ionRouterOutletP: IonRouterOutlet) => {
          /*this.alertServiceP.alert_show({
              message: 'backbutton press 0 ----- '+ this.routerP.url +' -----ok',
              buttons: ['OK']
          });*/
          if (
            (ionRouterOutletP && ionRouterOutletP.canGoBack())
            && (!this.routes_to_prevent_back_button_off.includes(this.routerP.url))
          ) {
              /*this.alertServiceP.alert_show({
                  message: 'backbutton press 1',
                  buttons: ['OK']
              });*/
              ionRouterOutletP.pop();
          } else {
              /*this.alertServiceP.alert_show({
                  message: 'backbutton press 2',
                  buttons: ['OK']
              });*/
              if ( (new Date().getTime() - this.backbutton_last_clicked_time) < this.exit_duration ) {
              /*this.alertServiceP.alert_show({
                  message: 'backbutton press 3',
                  buttons: ['OK']
              });*/
                  navigator['app'].exitApp();
              } else {
              /*this.alertServiceP.alert_show({
                  message: 'backbutton press 4',
                  buttons: ['OK']
              });*/
                this.toastServiceP.toast_show({
                    message: 'Press one more time to exit',
                    duration: 2000,
                    color: 'danger',
                });

                this.backbutton_last_clicked_time = new Date().getTime();
              }
              /*this.alertServiceP.alert_show({
                  message: 'backbutton press 5',
                  buttons: ['OK']
              });*/
          }
              /*this.alertServiceP.alert_show({
                  message: 'backbutton press 6',
                  buttons: ['OK']
              });*/
      });
      return;
  }
}
