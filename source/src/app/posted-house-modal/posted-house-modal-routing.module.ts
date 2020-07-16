import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostedHouseModalPage } from './posted-house-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostedHouseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostedHouseModalPageRoutingModule {}
