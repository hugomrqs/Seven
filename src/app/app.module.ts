import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api/api.service";
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarousselComponent } from './components/Home/caroussel/caroussel.component';
import { ShowMovieComponent } from './components/Home/show-movie/show-movie.component';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { FormsModule } from '@angular/forms';
import { SearchResultPageComponent } from './components/Search/search-result-page/search-result-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilmClickedComponent } from './components/Search/film-clicked/film-clicked.component';
import { MatIconModule } from '@angular/material/icon';
import { SuggestionPageComponent } from './components/Suggestion/suggestion-page/suggestion-page.component';
import { SuggestionCarousselComponent } from './components/Suggestion/suggestion-caroussel/suggestion-caroussel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MenuComponent,
    NextDirective,
    PrevDirective,
    CarousselComponent,
    ShowMovieComponent,
    SearchResultPageComponent,
    FilmClickedComponent,
    SuggestionPageComponent,
    SuggestionCarousselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
