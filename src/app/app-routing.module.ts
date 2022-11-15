import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VyukaComponent } from './pages/vyukovymod/vyukovymod.component';
import { SlovnikComponent } from './pages/slovnik/slovnik.component';
import { PomuckyComponent } from './pages/pomucky/pomucky.component';
import { NavodyComponent } from './pages/navody/navody.component';
import { KrokyComponent } from './pages/kroky/kroky.component';
import { PopisyComponent } from './pages/popisy/popisy.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'slovnik/:nazevStylu', component: SlovnikComponent },
  { path: 'pomucky/:nazevPomucky', component: PomuckyComponent },
  { path: 'navody', component: NavodyComponent },
  { path: 'vyukovymod', component: VyukaComponent },
  { path: 'kroky', component: KrokyComponent },
  { path: 'popisy', component: PopisyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
