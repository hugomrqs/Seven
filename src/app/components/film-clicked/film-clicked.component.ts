import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Film } from '../../modele/film.modele';
import {FavoritesMoviesService} from "../../services/Favorites-movies/favorites-movies.service";
import {ApiService} from "../../services/api/api.service";
// import Math from "$GLOBAL$";
// import Array from "$GLOBAL$";

@Component({
  selector: 'app-film-clicked',
  templateUrl: './film-clicked.component.html',
  styleUrls: ['./film-clicked.component.scss']
})
export class FilmClickedComponent implements OnInit{
  @Input() film: Film | undefined ;
  @Output() closeDetails = new EventEmitter<void>();

  vote : number =0
  isFilmFav : boolean = false;
constructor( private fav : FavoritesMoviesService, private api : ApiService) {}
  // getStars(): number[] {
  //   const roundedRating = this.film?.vote_average ? Math.round(this.film.vote_average) : 0;
  //   return Array.from({ length: roundedRating }, (_, index) => index + 1);
  //
  // }

  onClosePopup() {
    this.closeDetails.emit();
  }
  note(vote : number){
    return this.vote === vote;
  }
    addFavorite(film : Film | undefined){
    this.fav.setSelectedData(film)
    this.isFilmFav = true;

  }

  ngOnInit(): void {
    if(this.fav.favoriteList.some( film => film.id === this.film?.id )){
      this.isFilmFav = true
    }
  }
}
