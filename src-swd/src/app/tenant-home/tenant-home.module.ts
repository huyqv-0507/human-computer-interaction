import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantHomePageRoutingModule } from './tenant-home-routing.module';

import { TenantHomePage } from './tenant-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantHomePageRoutingModule
  ],
  declarations: [TenantHomePage]
})
export class TenantHomePageModule {}
