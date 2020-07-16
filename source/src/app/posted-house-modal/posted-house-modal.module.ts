import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostedHouseModalPageRoutingModule } from './posted-house-modal-routing.module';

import { PostedHouseModalPage } from './posted-house-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostedHouseModalPageRoutingModule
  ],
  declarations: [PostedHouseModalPage]
})
export class PostedHouseModalPageModule {}
