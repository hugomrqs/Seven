import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatedMoviesComponent } from "./components/Rating/rated-movies/rated-movies.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RatedComponent } from "./components/Rating/rated/rated.component";
import { FavoritesPageComponent } from "./components/favorites-page/favorites-page.component";
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { SearchResultPageComponent } from './components/Search/search-result-page/search-result-page.component';
import { SuggestionPageComponent } from './components/Suggestion/suggestion-page/suggestion-page.component';

const routes: Routes = [
  { path : 'login', component : LoginPageComponent},
  { path : 'home', component : HomePageComponent},
  { path: 'search', component : SearchResultPageComponent},
  { path : 'search/:id', component : RatedMoviesComponent},
  { path : 'ratings', component : RatedComponent},
  { path : 'favorites', component : FavoritesPageComponent},
  { path: 'suggestions', component : SuggestionPageComponent},
  { path : '', redirectTo : '/home', pathMatch : 'full'},
  { path : '**', component : HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
