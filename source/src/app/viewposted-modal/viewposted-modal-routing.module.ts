import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpostedModalPage } from './viewposted-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpostedModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpostedModalPageRoutingModule {}
