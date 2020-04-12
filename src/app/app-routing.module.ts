import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadChildren: () => import('./panel/intro/intro.module').then(m => m.IntroPageModule) },
  { path: 'login', loadChildren: () => import('./panel/login/login.module').then(m => m.LoginPageModule) },
  { path: 'visit', loadChildren: () => import('./panel/visit/visit.module').then(m => m.VisitPageModule) },
  { path: 'settings', loadChildren: () => import('./panel/settings/settings.module').then(m => m.SettingsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
