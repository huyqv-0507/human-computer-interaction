import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostMessengerNotiPage } from './host-messenger-noti.page';

const routes: Routes = [
  {
    path: '',
    component: HostMessengerNotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostMessengerNotiPageRoutingModule {}
