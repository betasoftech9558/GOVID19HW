import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApproutingguardLoginYesService, ApproutingguardLoginNoService } from './approutingguard.service';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'intro',
        canActivate: [ApproutingguardLoginNoService],
    },
    {
        path: 'intro',
        loadChildren: () => import('../panel/intro/intro.module').then(m => m.IntroPageModule),
        canActivate: [ApproutingguardLoginNoService],
    }, {
        path: 'login',
        loadChildren: () => import('../panel/login/login.module').then(m => m.LoginPageModule),
        canActivate: [ApproutingguardLoginNoService],
    }, {
        path: 'registration',
        loadChildren: () => import('../panel/registration/registration.module').then(m => m.RegistrationPageModule),
        canActivate: [ApproutingguardLoginNoService],
    }, {
        path: 'tabs',
        loadChildren: () => import('../panel/common/tabs/tabs.module').then(m => m.TabsPageModule),
        canActivate: [ApproutingguardLoginYesService],
    },
    {
        path: 'settings',
        loadChildren: () => import('../panel/settings/settings.module').then(m => m.SettingsPageModule),
        canActivate: [ApproutingguardLoginNoService],
    },
    { path: '**', pathMatch: 'full', redirectTo: 'intro', }
];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ApproutingguardLoginYesService,
        ApproutingguardLoginNoService,
    ],
    bootstrap: []
})
export class AppRoutingModule { }
