import { Component } from '@angular/core';

import { ViewChildren, QueryList } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BackbuttonService } from './panel/common/backbutton/backbutton.service';
import { ToastService } from './panel/common/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backbuttonServiceP: BackbuttonService,
    private toastServiceP: ToastService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.platform.backButton.subscribe(() => {
        this.backbuttonServiceP.on_press_backbutton( this.routerOutlets);
        return;
      });
    });
  }
}
