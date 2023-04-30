import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VyukaComponent } from './pages/vyukovymod/vyukovymod.component';
import { SlovnikComponent } from './pages/slovnik/slovnik.component';
import { PomuckyComponent } from './pages/pomucky/pomucky.component';
import { NavodyComponent } from './pages/navody/navody.component';
import { VyukovymodDetailComponent } from './pages/vyukovymod/vyukovymod-detail/vyukovymod-detail.component';
import { NavodyDetailComponent } from './pages/navody/navody-detail/navody-detail.component';
import { PrihlaseniComponent } from './pages/prihlaseni/prihlaseni.component';
import { RegistraceComponent } from './pages/registrace/registrace.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VerificationComponent } from './pages/verification/verification.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'slovnik/:nazevStylu', component: SlovnikComponent },
  { path: 'pomucky/:nazevPomucky', component: PomuckyComponent },
  { path: 'navody', component: NavodyComponent },
  { path: 'vyukovymod', component: VyukaComponent },
  { path: 'vyukovymod/vyukovymod-detail', component: VyukovymodDetailComponent },
  { path: 'navody/:nazevNavodu', component: NavodyDetailComponent },
  { path: 'prihlaseni', component: PrihlaseniComponent },
  { path: 'registrace', component: RegistraceComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'verification', component: VerificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
