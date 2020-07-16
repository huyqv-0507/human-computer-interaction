import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleHousePageRoutingModule } from './google-house-routing.module';

import { GoogleHousePage } from './google-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleHousePageRoutingModule
  ],
  declarations: [GoogleHousePage]
})
export class GoogleHousePageModule {}
