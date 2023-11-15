import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from './Components/Home/home-page/home-page.component';
import { HeaderComponent } from './Components/NavBar/header/header.component';
import { MenuComponent } from './Components/NavBar/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PopularCarousselComponent } from './Components/Home/popular-caroussel/popular-caroussel.component';
import { ShowMovieComponent } from './Components/Home/show-movie/show-movie.component';
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from '@angular/forms';
import { SearchResultPageComponent } from './Components/Search/search-result-page/search-result-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { RatingPageComponent } from './components/Rating/rating-page/rating-page.component';
import { FavoritesPageComponent } from './Components/Favorite/favorites-page/favorites-page.component';
import { FilmClickedComponent } from './Components/Modal/film-clicked/film-clicked.component';
import { MatIconModule } from '@angular/material/icon';
import { SuggestionPageComponent } from './Components/Suggestion/suggestion-page/suggestion-page.component';
import { SuggestionCarousselComponent } from './Components/Suggestion/suggestion-caroussel/suggestion-caroussel.component';
import { CarousselGeneralisationComponent } from './Components/Generalisation/caroussel-generalisation/caroussel-generalisation.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { AddRatingComponent } from './Components/Rating/add-rating/add-rating.component';
import { FeaturesPageComponent } from './Components/Info/info-page/features-page.component';
import { ApiService } from './Services/api/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MenuComponent,
    PopularCarousselComponent,
    ShowMovieComponent,
    SearchResultPageComponent,
    RatingPageComponent,
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
