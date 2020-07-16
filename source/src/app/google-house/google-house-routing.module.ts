import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleHousePage } from './google-house.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleHousePageRoutingModule {}
