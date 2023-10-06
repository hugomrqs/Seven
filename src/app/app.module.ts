import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FilmServiceComponent } from './film-service/film-service.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FilmServiceComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
