import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BleComponent } from './pages/ble/ble.component';
import { HomeComponent } from './pages/home/home.component';
import { VyukovymodComponent } from './pages/vyukovymod/vyukovymod.component';
import { SlovnikComponent } from './pages/slovnik/slovnik.component';
import { PomuckyComponent } from './pomucky/pomucky.component';
import { NavodyComponent } from './navody/navody.component';

@NgModule({
  declarations: [
    AppComponent,
    BleComponent,
    HomeComponent,
    VyukovymodComponent,
    SlovnikComponent,
    PomuckyComponent,
    NavodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
