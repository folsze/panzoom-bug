import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'anvaka-panzoom',
    pathMatch: 'full'
  },
  {
    path: 'panzoom',
    loadChildren: () => import('./panzoom/panzoom.module').then( m => m.PanzoomPageModule)
  },
  {
    path: 'anvaka-panzoom',
    loadChildren: () => import('./anvaka-panzoom/anvaka-panzoom.module').then( m => m.AnvakaPanzoomPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
