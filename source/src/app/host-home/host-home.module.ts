import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostHomePageRoutingModule } from './host-home-routing.module';

import { HostHomePage } from './host-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostHomePageRoutingModule
  ],
  declarations: [HostHomePage]
})
export class HostHomePageModule {}
