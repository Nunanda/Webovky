import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VyukovymodComponent } from './pages/vyukovymod/vyukovymod.component';
import { SlovnikComponent } from './pages/slovnik/slovnik.component';
import { PomuckyComponent } from './pages/pomucky/pomucky.component';
import { NavodyComponent } from './pages/navody/navody.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.component').then( m => m.HomeComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'slovnik',
    loadChildren: () => import('./pages/slovnik/slovnik.component').then( m => m.SlovnikComponent)
  },

  {
    path: 'pomucky',
    loadChildren: () => import('./pages/pomucky/pomucky.component').then( m => m.PomuckyComponent)
  },
  {
    path: 'vyukovy-mod',
    loadChildren: () => import('./pages/vyukovymod/vyukovymod.component').then( m => m.VyukovymodComponent)
  },
  {
    path: 'navody',
    loadChildren: () => import('./pages/navody/navody.component').then( m => m.NavodyComponent)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
