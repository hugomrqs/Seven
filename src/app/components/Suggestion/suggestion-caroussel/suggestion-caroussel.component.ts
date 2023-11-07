import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/modele/film.modele';
import { ApiService } from 'src/app/services/api/api.service';
import { SuggestionService } from 'src/app/services/suggestion/suggestion.service';

@Component({
  selector: 'app-suggestion-caroussel',
  templateUrl: './suggestion-caroussel.component.html',
  styleUrls: ['./suggestion-caroussel.component.scss']
})
export class SuggestionCarousselComponent implements OnInit {
  similarFilms : Film[] = [] ;
  @Input() film : Film | undefined ;

  //pour un film qui à été cliqué --> ouverture de la popup
  selectedFilm: Film | undefined;
  popupIsVisible: boolean = false; 
  overlayAnimation: string = '';


  constructor(private api: ApiService, private suggestionService : SuggestionService) {}

  ngOnInit(): void {
    if(this.film?.id){
      this.api.getSimilarMovies(this.film.id).subscribe( response =>{
        this.similarFilms = response.results.filter(film => film.poster_path !== null).slice(0,15); //sans ceux avec affiche vide
      })
    }
  }

  //code ci dessous pour l'ouverture de la popup de details
  openFilmDetails(film: Film) {
    this.selectedFilm = film;
    this.popupIsVisible = true;
    this.disableScrolling();
    this.overlayAnimation = 'fade-in';
    console.log(this.selectedFilm);
  }

  closeFilmDetails() {
    this.overlayAnimation = 'fade-out';
    setTimeout(() => {
      this.selectedFilm = undefined;
      this.popupIsVisible = false;
      this.enableScrolling();
      this.overlayAnimation = ''; // Réinitialisez l'animation après la fermeture
    }, 500); // Attendre la fin de l'animation (500ms)
  }

  //disable/enable le scrolling lorsque que la popup de détails est ouverte
  disableScrolling() {
    document.body.style.overflow = 'hidden';
  }

  enableScrolling() {
    document.body.style.overflow = 'auto';
  }

  // Pour fermer la popup lorsqu'on clique aussi en dehors de celle-ci (sur l'overlay)
  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeFilmDetails();
    }
  }

}
