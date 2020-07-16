import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantMessengerNotiPage } from './tenant-messenger-noti.page';

const routes: Routes = [
  {
    path: '',
    component: TenantMessengerNotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantMessengerNotiPageRoutingModule {}
