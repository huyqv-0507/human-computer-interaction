import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostPage } from './host.page';

const routes: Routes = [
  {
    path: '',
    component: HostPage,
    children: [
      {
        path: '',
        redirectTo: '/host/host-home',
        pathMatch: 'full'
      },
      {
        path: 'host-home',
        loadChildren: () => import('../host-home/host-home.module').then(m => m.HostHomePageModule)
      },
      {
        path: 'posted-house',
        loadChildren: () => import('../posted-house-modal/posted-house-modal.module').then(m => m.PostedHouseModalPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostPageRoutingModule {}
