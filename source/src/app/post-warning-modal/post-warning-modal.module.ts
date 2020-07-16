import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostWarningModalPageRoutingModule } from './post-warning-modal-routing.module';

import { PostWarningModalPage } from './post-warning-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostWarningModalPageRoutingModule
  ],
  declarations: [PostWarningModalPage]
})
export class PostWarningModalPageModule {}
