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
import { PrihlaseniComponent } from './pages/prihlaseni/prihlaseni.component';
import { RegistraceComponent } from './pages/prihlaseni/registrace/registrace.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    PrihlaseniComponent,
    RegistraceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
