import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpostedsuccessModalPage } from './viewpostedsuccess-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpostedsuccessModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpostedsuccessModalPageRoutingModule {}
