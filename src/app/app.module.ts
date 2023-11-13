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
import { PopularCarousselComponent } from './components/Home/popular-caroussel/popular-caroussel.component';
import { ShowMovieComponent } from './components/Home/show-movie/show-movie.component';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from '@angular/forms';
import { SearchResultPageComponent } from './components/Search/search-result-page/search-result-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { RatedComponent } from './components/Rating/rated/rated.component';
import { FavoritesPageComponent } from './components/Favorite/favorites-page/favorites-page.component';
import { FilmClickedComponent } from './components/film-clicked/film-clicked.component';
import { MatIconModule } from '@angular/material/icon';
import { SuggestionPageComponent } from './components/Suggestion/suggestion-page/suggestion-page.component';
import { SuggestionCarousselComponent } from './components/Suggestion/suggestion-caroussel/suggestion-caroussel.component';
import { CarousselGeneralisationComponent } from './components/caroussel-generalisation/caroussel-generalisation.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AddRatingComponent } from './components/Rating/add-rating/add-rating.component';
import { FeaturesPageComponent } from './components/Info/info-page/features-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MenuComponent,
    PopularCarousselComponent,
    ShowMovieComponent,
    SearchResultPageComponent,
    RatedComponent,
    FavoritesPageComponent,
    FilmClickedComponent,
    SuggestionPageComponent,
    SuggestionCarousselComponent,
    CarousselGeneralisationComponent,
    FeaturesPageComponent,
    AddRatingComponent
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
    MatDividerModule,
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
