import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VyukaComponent } from './pages/vyukovymod/vyukovymod.component';
import { SlovnikComponent } from './pages/slovnik/slovnik.component';
import { PomuckyComponent } from './pages/pomucky/pomucky.component';
import { NavodyComponent } from './pages/navody/navody.component';
import { VyukovymodDetailComponent } from './pages/vyukovymod/vyukovymod-detail/vyukovymod-detail.component';
import { NavodyDetailComponent } from './pages/navody/navody-detail/navody-detail.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SafePipe } from './safe.pipe';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LocationStrategy, PathLocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VyukaComponent,
    SlovnikComponent,
    PomuckyComponent,
    NavodyComponent,
    VyukovymodDetailComponent,
    NavodyDetailComponent,
    SafePipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
