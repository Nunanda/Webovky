import { NgModule } from '@angular/core';
import {  PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./pages/home/home.component').then( m => m.HomeComponent)
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
/*{
  path: 'vyukovymod',
  loadChildren: () => import('./pages/vyukovymod/vyukovymod.component').then( m => m.VyukovymodComponent)
}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
