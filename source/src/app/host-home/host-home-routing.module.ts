import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostHomePage } from './host-home.page';

const routes: Routes = [
  {
    path: '',
    component: HostHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostHomePageRoutingModule {}
