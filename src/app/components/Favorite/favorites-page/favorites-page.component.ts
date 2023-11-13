import { Component, OnInit } from '@angular/core';
import { FavoritesMoviesService } from "../../../services/Favorites-movies/favorites-movies.service";
import { Film } from "../../../modele/film.modele";
import { ApiService } from "../../../services/api/api.service";

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit{
  films : Film[] = []

  constructor(private api: ApiService, private favoriteService : FavoritesMoviesService) {}

  ngOnInit(): void {
    this.films = this.favoriteService.favoriteList.reverse() ;
  }

  popMovie(film : Film) : void {
    for(let i=0 ; i<this.films.length ; i++){
      if(this.films[i].id === film.id){
        this.films.splice(i,1) ;
      }
    }
  }
}
