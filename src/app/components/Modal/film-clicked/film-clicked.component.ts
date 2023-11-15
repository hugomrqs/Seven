import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../../Modele/film.modele';
import { FavoritesMoviesService } from "../../../Services/favorites-movies/favorites-movies.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-clicked',
  templateUrl: './film-clicked.component.html',
  styleUrls: ['./film-clicked.component.scss']
})

export class FilmClickedComponent implements OnInit {
  @Input() public film : Film | undefined ;
  @Output() private closeDetails = new EventEmitter<void>() ;

  public vote : number = 0 ;
  public isFilmFav : boolean = false;
  public isSuggestionsDisplay : boolean = false ;

  constructor( private favoriteService : FavoritesMoviesService,  private router : Router ) {}

  ngOnInit(): void {
    //si il fait déjà partie des favoris, on disabled l'ajout aux favoris
    this.favoriteService.selectedData$.subscribe((films: Film[]) => {
      if (films.some(f => f.id === this.film?.id)) {
        this.isFilmFav = true;
      }
    });
    if(this.film){ 
      this.vote = Math.floor(this.film.vote_average / 2) ;
      
      //pour afficher le lien de redirection vers suggestions uniquement si on est dans la page de search, et si le film à une note > 0
      this.isSuggestionsDisplay = this.router.url === '/search' ;
    }
  }

  public onClosePopup() : void {
    this.closeDetails.emit();
  }
  
  public enableScrolling() : void {
    document.body.style.overflow = 'scroll';

  }
  public addFavorite(film : Film) : void {
    this.favoriteService.setSelectedData(film)
    this.isFilmFav = true;
  }
}
