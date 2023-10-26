import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./service/api.service";
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { ShowMovieComponent } from './components/show-movie/show-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MenuComponent,
    NextDirective,
    PrevDirective,
    CarousselComponent,
    ShowMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
