import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnvakaPanzoomPage } from './anvaka-panzoom.page';

const routes: Routes = [
  {
    path: '',
    component: AnvakaPanzoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnvakaPanzoomPageRoutingModule {}
