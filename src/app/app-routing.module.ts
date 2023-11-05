import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/Home/home-page/home-page.component';
import { SearchResultPageComponent } from './components/Search/search-result-page/search-result-page.component';
import { SuggestionPageComponent } from './components/Suggestion/suggestion-page/suggestion-page.component';

const routes: Routes = [
  { path : 'home', component : HomePageComponent},
  { path: 'search', component : SearchResultPageComponent},
  { path: 'suggestion', component : SuggestionPageComponent},
  { path : '', redirectTo : '/home', pathMatch : 'full'},
  { path : '**', component : HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
