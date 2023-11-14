import { Component, OnInit } from '@angular/core';
import { FavoritesMoviesService } from "../../../Services/favorites-movies/favorites-movies.service";
import { Film } from "../../../Modele/film.modele";
import { ApiService } from "../../../Services/api/api.service";

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit{
  films : Film[] = [] ;

  constructor(private api: ApiService, private favoriteService : FavoritesMoviesService) {}

  ngOnInit(): void {
    this.favoriteService.selectedData$.subscribe((films: Film[]) => {
      this.films = films ;
    });
  }

  popMovie(film : Film) : void {
    for(let i=0 ; i<this.films.length ; i++){
      if(this.films[i].id === film.id){
        this.films.splice(i,1) ;
      }
    }
  }
}
