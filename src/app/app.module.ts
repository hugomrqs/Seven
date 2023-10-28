import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api/api.service";
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { FormsModule } from '@angular/forms';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MenuComponent,
    NextDirective,
    PrevDirective,
    CarousselComponent,
    SearchResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
