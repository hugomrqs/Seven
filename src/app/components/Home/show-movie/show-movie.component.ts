import {Component, OnInit} from '@angular/core';
import {Film} from "../../../modele/film.modele";
import {HomePageDataService} from "../../../services/home-page-data/home-page-data.service";
import {FavoritesMoviesService} from "../../../services/Favorites-movies/favorites-movies.service";

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})

export class ShowMovieComponent  implements OnInit{

  receivedData: Film | undefined;

  constructor(private data : HomePageDataService, private fav : FavoritesMoviesService) {}
  addFavorite(film : Film | undefined){
    this.fav.setSelectedData(film)
  }
  ngOnInit(): void {
    this.data.selectedData$.subscribe(data => {
      this.receivedData = data;
    });
    }
  }


