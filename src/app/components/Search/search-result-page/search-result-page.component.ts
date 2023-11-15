import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Modele/film.modele';
import { SearchTitleService } from 'src/app/Services/search-title/search-title.service';
import { SuggestionService } from 'src/app/Services/suggestion/suggestion.service';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})

export class SearchResultPageComponent implements OnInit {
  public resultFilms: Film[] = [] ;

  //pour un film qui à été cliqué --> ouverture de la popup
  public selectedFilm: Film | undefined;
  public popupIsVisible: boolean = false;
  public overlayAnimation: string = '';


  constructor(private searchTitleService : SearchTitleService, private suggestionService : SuggestionService) {}

  ngOnInit() {
    //abonnement observable, car OnInit = uniquement initialisation du component. //Onchanges plus propice si on avait eu un @Input() à la place d'un service pour transmettre les données
    this.searchTitleService.results$.subscribe(results => {
      this.resultFilms = results.filter(film => film.poster_path !== null); //certain film n'ont pas d'affiche, on les exclus
    });
  }

  public openFilmDetails(film: Film) : void {
    this.selectedFilm = film;
    this.popupIsVisible = true;
    this.disableScrolling();
    this.overlayAnimation = 'fade-in';
    this.suggestionService.addFilmClicked(film) ; //pour les suggestions
    console.log(this.selectedFilm);
  }

  public closeFilmDetails() : void {
    this.overlayAnimation = 'fade-out';
    setTimeout(() => {
      this.selectedFilm = undefined;
      this.popupIsVisible = false;
      this.enableScrolling();
      this.overlayAnimation = ''; // Réinitialisez l'animation après la fermeture
    }, 500); // Attendre la fin de l'animation (500ms)
  }

  private disableScrolling() : void {
    document.body.style.overflow = 'hidden';
  }

  private enableScrolling() : void {
    document.body.style.overflow = 'auto';
  }

  // Pour fermer la popup lorsqu'on clique aussi en dehors de celle-ci (sur l'overlay)
  public onOverlayClick(event: Event) : void {
    if (event.target === event.currentTarget) {
      this.closeFilmDetails();
    }
  }
}

