import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostHouseModalPage } from './post-house-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostHouseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostHouseModalPageRoutingModule {}
