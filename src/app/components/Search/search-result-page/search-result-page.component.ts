import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film.modele';
import { SearchTitleService } from 'src/app/services/search-title/search-title.service';
import { FilmClickedComponent } from 'src/app/components/film-clicked/film-clicked.component';
import { SuggestionService } from 'src/app/services/suggestion/suggestion.service';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})

export class SearchResultPageComponent implements OnInit {
  resultFilms: Film[] = [] ;

  //pour un film qui à été cliqué --> ouverture de la popup
  selectedFilm: Film | undefined;
  popupIsVisible: boolean = false; 
  overlayAnimation: string = '';


  constructor(private searchTitleService : SearchTitleService, private suggestionService : SuggestionService) {}

  ngOnInit() {
    //abonnement observable, car OnInit = uniquement initialisation du component. //Onchanges plus propice si on avait eu un @Input() à la place d'un service pour transmettre les données
    this.searchTitleService.results$.subscribe(results => {
      this.resultFilms = results.filter(film => film.poster_path !== null); //certain film n'ont pas d'affiche, on les exclus
    });
  }

  openFilmDetails(film: Film) {
    this.selectedFilm = film;
    this.popupIsVisible = true;
    this.disableScrolling();
    this.overlayAnimation = 'fade-in';
    this.suggestionService.AddFilmClicked(film) ; //pour les suggestions
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

