import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantPage } from './tenant.page';

const routes: Routes = [
  {
    path: '',
    component: TenantPage,
    children: [
      {
        path: 'tenant-home',
        loadChildren: '../tenant-home/tenant-home.module#TenantHomePageModule'
      },
      // {
      //   path: 'interest',
      //   loadChildren: '../interest/interest.module#InterestPageModule'
      // },
      {
        path: '',
        redirectTo: '/tenant/tenant-home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantPageRoutingModule {}
