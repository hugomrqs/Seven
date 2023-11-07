import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatedMoviesComponent } from "./components/rated-movies/rated-movies.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RatedComponent } from "./components/rated/rated.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { SearchResultPageComponent } from './components/Search/search-result-page/search-result-page.component';
import { SuggestionPageComponent } from './components/Suggestion/suggestion-page/suggestion-page.component';

const routes: Routes = [
  { path : 'login', component : LoginPageComponent},
  { path : 'home', component : HomePageComponent},
  { path: 'search', component : SearchResultPageComponent},
  { path : 'search/:id', component : RatedMoviesComponent},
  { path : 'ratings', component : RatedComponent},
  { path : 'favorites', component : FavoritesComponent},
  { path: 'suggestions', component : SuggestionPageComponent},
  { path : '', redirectTo : '/home', pathMatch : 'full'},
  { path : '**', component : HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
