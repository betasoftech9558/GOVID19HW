import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../common/alert/alert.service';
import { ToastService } from '../common/toast/toast.service';

@Component({
    selector: 'app-intro',
    templateUrl: 'intro.page.html',
    styleUrls: ['intro.page.scss'],
})
export class IntroPage implements OnInit {
    public component: any;
    public service: any;

    constructor(
        private routerP: Router,
        private alertServiceP: AlertService,
        private toastServiceP: ToastService,
        ) { const myThis = this; }

        ngOnInit() { const myThis = this; }

        ngAfterContentInit() {
            const myThis = this;
            myThis.init();
        }

        init() {
            const myThis = this;
            myThis.component = {};

            if ( localStorage.getItem('is_intro_done') && localStorage.getItem('is_intro_done').toString().trim() === '1' ) {
                myThis.routerP.navigate(['/login']);
            }

            myThis.component.goToLogin = () => {
                localStorage.setItem('is_intro_done', '1');
                this.routerP.navigate(['/login']);
            }
        }
    }
