import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';
import {RatedMoviesComponent} from "./components/rated-movies/rated-movies.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RatedComponent} from "./components/rated/rated.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";

const routes: Routes = [
  { path : 'login', component : LoginPageComponent},
  { path : 'home', component : HomePageComponent},
  { path: 'search', component : SearchResultPageComponent},
  { path : 'search/:id', component : RatedMoviesComponent},
  { path : 'rating', component : RatedComponent},
  {path : 'favorites', component : FavoritesComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
