import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatedComponent } from "./components/Rating/rated/rated.component";
import { FavoritesPageComponent } from "./components/Favorite/favorites-page/favorites-page.component";
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { SearchResultPageComponent } from './components/Search/search-result-page/search-result-page.component';
import { SuggestionPageComponent } from './components/Suggestion/suggestion-page/suggestion-page.component';
import {AddRatingComponent} from "./components/Rating/add-rating/add-rating.component";
import { FeaturesPageComponent } from './components/Info/info-page/features-page.component';

const routes: Routes = [
  { path : 'home', component : HomePageComponent},
  { path : 'login', component : AddRatingComponent},
  { path: 'search', component : SearchResultPageComponent},
  { path : 'ratings', component : RatedComponent},
  { path : 'favorites', component : FavoritesPageComponent},
  { path: 'suggestions', component : SuggestionPageComponent},
  { path: 'features', component : FeaturesPageComponent},
  { path : '', redirectTo : '/home', pathMatch : 'full'},
  { path : '**', component : HomePageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
