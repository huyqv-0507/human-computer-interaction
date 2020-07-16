import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantNotificationModalPage } from './tenant-notification-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TenantNotificationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantNotificationModalPageRoutingModule {}
