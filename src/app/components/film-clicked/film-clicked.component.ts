import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../modele/film.modele';

@Component({
  selector: 'app-film-clicked',
  templateUrl: './film-clicked.component.html',
  styleUrls: ['./film-clicked.component.scss']
})
export class FilmClickedComponent {
  @Input() film: Film | undefined ;
  @Output() closeDetails = new EventEmitter<void>();


  getStars(): number[] {
    const roundedRating = this.film?.vote_average ? Math.round(this.film.vote_average) : 0;
    return Array.from({ length: roundedRating }, (_, index) => index + 1);
  }

  onClosePopup() {
    this.closeDetails.emit();
  }
}
