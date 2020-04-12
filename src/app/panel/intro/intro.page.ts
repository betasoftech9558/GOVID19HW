import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    }

    goToLogin() {
        this.routerP.navigate(['/login']);
    }
}
