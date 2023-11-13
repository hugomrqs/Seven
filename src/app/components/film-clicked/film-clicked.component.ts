import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Film } from '../../modele/film.modele';
import { FavoritesMoviesService } from "../../services/Favorites-movies/favorites-movies.service";
import { ApiService } from "../../services/api/api.service";
import { Router } from '@angular/router';

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
  isSuggestionsDisplay : boolean = false ;

  constructor( private fav : FavoritesMoviesService, private api : ApiService, private router : Router ) {}

  onClosePopup() {
    this.closeDetails.emit();
  }
    addFavorite(film : Film | undefined){
    this.fav.setSelectedData(film)
    this.isFilmFav = true;

  }

  ngOnInit(): void {
    if(this.fav.favoriteList.some( film => film.id === this.film?.id )){
      this.isFilmFav = true
    }
    if(this.film !== undefined){
      this.vote = this.film.vote_average
    }
    //pour afficher le lien de redirection vers suggestions uniquement si on est dans la page de search
    this.isSuggestionsDisplay = this.router.url === '/search';
  }
}
