import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostMessengerNotiPageRoutingModule } from './host-messenger-noti-routing.module';

import { HostMessengerNotiPage } from './host-messenger-noti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostMessengerNotiPageRoutingModule
  ],
  declarations: [HostMessengerNotiPage]
})
export class HostMessengerNotiPageModule {}
