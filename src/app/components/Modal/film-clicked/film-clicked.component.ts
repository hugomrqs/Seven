import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../../Modele/film.modele';
import { FavoritesMoviesService } from "../../../Services/favorites-movies/favorites-movies.service";
import { ApiService } from "../../../Services/api/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-clicked',
  templateUrl: './film-clicked.component.html',
  styleUrls: ['./film-clicked.component.scss']
})

export class FilmClickedComponent implements OnInit {
  @Input() film : Film | undefined ;
  @Output() closeDetails = new EventEmitter<void>() ;

  vote : number = 0 ;
  isFilmFav : boolean = false;
  isSuggestionsDisplay : boolean = false ;

  constructor( private favoriteService : FavoritesMoviesService, private api : ApiService, private router : Router ) {}

  ngOnInit(): void {
    //si il fait déjà partie des favoris, on disabled l'ajout aux favoris
    this.favoriteService.selectedData$.subscribe((films: Film[]) => {
      if (this.film && films.some(f => f.id === this.film?.id)) {
        this.isFilmFav = true;
      }
    });
    if(this.film !== undefined){ 
      this.vote = Math.floor(this.film.vote_average / 2) ;
    }
    //pour afficher le lien de redirection vers suggestions uniquement si on est dans la page de search
    this.isSuggestionsDisplay = this.router.url === '/search';
  }

  onClosePopup() : void {
    this.closeDetails.emit();
  }

  addFavorite(film : Film) : void {
    this.favoriteService.setSelectedData(film)
    this.isFilmFav = true;
  }
}
