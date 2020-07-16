import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefuseModalPage } from './refuse-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RefuseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefuseModalPageRoutingModule {}
