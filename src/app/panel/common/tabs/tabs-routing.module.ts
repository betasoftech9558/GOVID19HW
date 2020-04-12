import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'visit',
        children: [
          {
            path: '',
            loadChildren: () => import('../../../panel/visit/visit.module').then(m => m.VisitPageModule)
          }
        ]
      },
      {
        path: 'userprofile',
        children: [
          {
            path: '',
            loadChildren: () => import('../../../panel/userprofile/userprofile.module').then(m => m.UserprofilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/visit',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/visit',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
