import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationPage } from './notification.page';
// import { FooterComponent } from '../components/footer/footer.component';
// import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule
  ],
  declarations: [
    NotificationPage,
    // FooterComponent,
    // HeaderComponent
  ]
})
export class NotificationPageModule { }
