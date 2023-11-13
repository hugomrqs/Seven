import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Film } from '../../modele/film.modele';
import { FavoritesMoviesService } from "../../services/Favorites-movies/favorites-movies.service";
import { ApiService } from "../../services/api/api.service";
import { Router } from '@angular/router';
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

  vote : number = 0 ;
  isFilmFav : boolean = false;
  isSuggestionsDisplay : boolean = false ;

  constructor( private fav : FavoritesMoviesService, private api : ApiService, private router : Router ) {}

  ngOnInit(): void {
    if(this.fav.favoriteList.some( film => film.id === this.film?.id )){
      this.isFilmFav = true
    }
    //pour afficher le lien de redirection vers suggestions uniquement si on est dans la page de search
    this.isSuggestionsDisplay = this.router.url === '/search';
  }

  onClosePopup() {
    this.closeDetails.emit();
  }
  
  note(vote : number){
    return this.vote === vote;
  }

  likeMovie(film : Film | undefined){
    const body = [this.vote, film?.id]
    this.api.postRateMovie(body).subscribe(response => console.log(response))
  }

  addFavorite(film : Film | undefined){
    this.fav.setSelectedData(film)
    this.isFilmFav = true;

  }
}
