import {Component, OnInit} from '@angular/core';
import {Film} from "../../../modele/film.modele";
import {HomePageDataService} from "../../../services/home-page-data/home-page-data.service";
import {FavoritesMoviesService} from "../../../services/Favorites-movies/favorites-movies.service";
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})

export class ShowMovieComponent  implements OnInit{
  receivedData: Film | undefined;
  isFilmFav : boolean = false;
  vote : number = 0
  constructor(private data : HomePageDataService, private fav : FavoritesMoviesService, private api: ApiService) {}
  addFavorite(film : Film | undefined){
    this.fav.setSelectedData(film)
    this.isFilmFav = true;
  }
  ngOnInit(): void {
    this.data.selectedData$.subscribe(data => {
      this.receivedData = data;
      if(this.fav.favoriteList.some( film => film.id === this.receivedData?.id )){
        this.isFilmFav = true
      }
      this.vote = this.receivedData.vote_average
      console.log(this.receivedData.vote_average)
    });

  }
  }


