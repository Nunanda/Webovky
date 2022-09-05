import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { BleComponent } from './pages/ble/ble.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    //AppComponent,
    BleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
})
export class AppModule { }
