import { Component, OnInit } from '@angular/core';
import { Film } from "../../../Modele/film.modele";
import { HomePageDataService } from "../../../Services/home-page-data/home-page-data.service";
import { FavoritesMoviesService } from "../../../Services/favorites-movies/favorites-movies.service";
import { ApiService } from "../../../Services/api/api.service";

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})

export class ShowMovieComponent implements OnInit {
  film : Film | undefined;
  isFilmFav: boolean = false;
  vote: number = 0;

  constructor(private HomePageService: HomePageDataService, private favoriteService: FavoritesMoviesService, private api: ApiService) { }

  ngOnInit(): void {
    this.HomePageService.results$.subscribe(data => {
      this.film = data;
    });
    if (this.favoriteService.favoriteList.some(film => film.id === this.film?.id)) {
      this.isFilmFav = true ;
    }
  }

  addFavorite(film: Film | undefined): void {
    this.favoriteService.setSelectedData(film)
    this.isFilmFav = true;
  }

}


