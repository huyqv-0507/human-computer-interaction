import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefuseModalPageRoutingModule } from './refuse-modal-routing.module';

import { RefuseModalPage } from './refuse-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefuseModalPageRoutingModule
  ],
  declarations: [RefuseModalPage]
})
export class RefuseModalPageModule {}
