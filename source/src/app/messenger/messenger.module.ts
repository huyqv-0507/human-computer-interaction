import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutosizeModule } from 'ngx-autosize';

import { MessengerPageRoutingModule } from './messenger-routing.module';

import { MessengerPage } from './messenger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessengerPageRoutingModule,
    AutosizeModule
  ],
  declarations: [MessengerPage]
})
export class MessengerPageModule { }
