import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpostedsuccessModalPageRoutingModule } from './viewpostedsuccess-modal-routing.module';

import { ViewpostedsuccessModalPage } from './viewpostedsuccess-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpostedsuccessModalPageRoutingModule
  ],
  declarations: [ViewpostedsuccessModalPage]
})
export class ViewpostedsuccessModalPageModule {}
