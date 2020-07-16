import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostHouseModalPageRoutingModule } from './post-house-modal-routing.module';

import { PostHouseModalPage } from './post-house-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostHouseModalPageRoutingModule
  ],
  declarations: [PostHouseModalPage]
})
export class PostHouseModalPageModule {}
