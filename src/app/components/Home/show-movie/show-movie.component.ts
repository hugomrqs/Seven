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
  public film : Film | undefined;
  public isFilmFav: boolean = false;
  public vote: number = 0;

  constructor(private HomePageService: HomePageDataService, private favoriteService: FavoritesMoviesService, private api: ApiService) { }

  ngOnInit(): void {
    this.HomePageService.results$.subscribe(data => {
      this.film = data;
      this.updateIsFilmFav(); // mettre à jour le statut "favori" à chaque changement de film
    });
    this.favoriteService.selectedData$.subscribe(() => {
      this.updateIsFilmFav(); // mettre à jour le statut "favori" à chaque changement dans la liste des favoris
    });
  }

  private updateIsFilmFav(): void {
    const currentData = this.favoriteService.getCurrentData();
    this.isFilmFav = currentData.some(f => f.id === this.film?.id);
  }

  public addFavorite(film : Film): void {
    this.favoriteService.setSelectedData(film);
  }
}
