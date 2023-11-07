import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api/api.service";
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { HeaderComponent } from './components/NavBar/header/header.component';
import { MenuComponent } from './components/NavBar/menu/menu.component';
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
import { RatedMoviesComponent } from './components/Rating/rated-movies/rated-movies.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RatedComponent } from './components/Rating/rated/rated.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { FilmClickedComponent } from './components/film-clicked/film-clicked.component';
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
    RatedMoviesComponent,
    LoginPageComponent,
    RatedComponent,
    FavoritesPageComponent,
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
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
