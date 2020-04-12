import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { LoginService } from '../panel/login/login.service';


@Injectable()
export class ApproutingguardLoginYesService implements CanActivate {
    public service: any = {};

    private redirectURL: String = '';

    constructor(
        private router: Router,

        private loginService: LoginService,
    ) {
        const myThis = this; myThis.service = {};

        myThis.init();
    }

    init() {
        const myThis = this;
        myThis.service.loginService = myThis.loginService.init();
    }

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        const myThis = this;
        if (myThis.service.loginService.isUserLogin()) {
            return true;
        } else {
            myThis.redirectURL = state.url;

            // myThis.service.loginService.userSignout();
            myThis.router.navigate(['/login']);
            // window.location.reload();

            return false;
        }
    }
}


@Injectable()
export class ApproutingguardLoginNoService implements CanActivate {
    public service: any = {};

    constructor(
        private router: Router,

        private loginService: LoginService,
    ) {
        const myThis = this; myThis.service = {};

        myThis.init();
    }

    init() {
        const myThis = this;
        myThis.service.loginService = myThis.loginService.init();
    }

    canActivate() {
        const myThis = this;
        if (myThis.service.loginService.isUserLogin()) {
            myThis.router.navigate(['tabs/addvisit']);
            return false;
        } else {
            return true;
        }
    }
}
