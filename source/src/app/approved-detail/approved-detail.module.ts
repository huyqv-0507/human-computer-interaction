import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedDetailPageRoutingModule } from './approved-detail-routing.module';

import { ApprovedDetailPage } from './approved-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedDetailPageRoutingModule
  ],
  declarations: [ApprovedDetailPage]
})
export class ApprovedDetailPageModule {}
