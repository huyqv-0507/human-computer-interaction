import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantNotificationModalPageRoutingModule } from './tenant-notification-modal-routing.module';

import { TenantNotificationModalPage } from './tenant-notification-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantNotificationModalPageRoutingModule
  ],
  declarations: [TenantNotificationModalPage]
})
export class TenantNotificationModalPageModule {}
