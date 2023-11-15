import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/Modele/film.modele';
import { SuggestionService } from 'src/app/Services/suggestion/suggestion.service';
import { ApiService } from '../../../Services/api/api.service';

@Component({
  selector: 'app-suggestion-caroussel',
  templateUrl: './suggestion-caroussel.component.html',
  styleUrls: ['./suggestion-caroussel.component.scss']
})
export class SuggestionCarousselComponent implements OnInit {
  public similarFilms : Film[] = [] ;
  @Input() public film : Film | undefined ;

  //pour un film qui à été cliqué --> ouverture de la popup
  public selectedFilm: Film | undefined;
  public popupIsVisible: boolean = false;
  public overlayAnimation: string = ''; //pour fade-in/out, voir dans styles.css


  constructor(private api: ApiService, private suggestionService : SuggestionService) {}

  ngOnInit(): void {
    if(this.film?.id){
      this.api.getSimilarMovies(this.film.id).subscribe( response =>{
        this.similarFilms = response.results.filter(film => film.poster_path !== null).slice(0,10); //sans ceux avec affiche vide
      })
    }
  }

  //code ci dessous pour l'ouverture de la popup de details
  public openFilmDetails(film: Film | undefined) {
    this.selectedFilm = film;
    this.popupIsVisible = true;
    this.disableScrolling();
    this.overlayAnimation = 'fade-in';
  }

  public closeFilmDetails() {
    this.overlayAnimation = 'fade-out';
    setTimeout(() => {
      this.selectedFilm = undefined;
      this.popupIsVisible = false;
      this.enableScrolling();
      this.overlayAnimation = ''; // Réinitialisez l'animation après la fermeture
    }, 500); // Attendre la fin de l'animation (500ms)
  }

  //disable/enable le scrolling lorsque que la popup de détails est ouverte
  private disableScrolling() {
    document.body.style.overflow = 'hidden';
  }

  private enableScrolling() {
    document.body.style.overflow = 'auto';
  }

  // Pour fermer la popup lorsqu'on clique aussi en dehors de celle-ci (sur l'overlay)
  public onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeFilmDetails();
    }
  }

}
