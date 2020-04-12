import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'addvisit',
        children: [
          {
            path: '',
            loadChildren: () => import('../../../panel/addvisit/addvisit.module').then(m => m.AddVisitPageModule)
          }
        ]
      },
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
        redirectTo: '/tabs/addvisit',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/addvisit',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
