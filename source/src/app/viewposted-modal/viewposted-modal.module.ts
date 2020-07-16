import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpostedModalPageRoutingModule } from './viewposted-modal-routing.module';

import { ViewpostedModalPage } from './viewposted-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpostedModalPageRoutingModule
  ],
  declarations: [ViewpostedModalPage]
})
export class ViewpostedModalPageModule {}
