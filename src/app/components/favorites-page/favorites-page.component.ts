import {Component, OnInit} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {ApiService} from "../../services/api/api.service";
import {FavoritesMoviesService} from "../../services/Favorites-movies/favorites-movies.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit{
  films : Film[] = []

  constructor(private api: ApiService, private fav : FavoritesMoviesService) {}

  ngOnInit(): void {
    this.films =this.fav.favoriteList
    }

  popMovie(film :Film){
    for(let i =0;i<this.films.length;i++){
      if(this.films[i].id ===film.id){
        this.films.splice(i,1)
      }
    }
  }
}
