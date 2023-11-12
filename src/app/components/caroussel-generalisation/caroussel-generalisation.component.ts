import { Component, Input } from '@angular/core';
import { Film } from 'src/app/modele/film.modele';

@Component({
  selector: 'app-caroussel-generalisation',
  templateUrl: './caroussel-generalisation.component.html',
  styleUrls: ['./caroussel-generalisation.component.scss']
})
export class CarousselGeneralisationComponent {
  @Input() productClass: string = 'product-home'; //par défaut, evite un passage d'input dans suggestion-carroussel
  @Input() containerClass: string = 'container-fluid-home'; //par defaut, evite un passage d'input dans suggestion-carroussel
  @Input() films: Film[] = [];

  //Pour prev/next le caroussel
  prev() {
    if (this.films.length > 1) {
      const lastFilm = this.films.pop();
      if(lastFilm){
        this.films.unshift(lastFilm);
      }
    }
  }

  next() {
    if (this.films.length > 1) {
      const firstFilm = this.films.shift();
      if (firstFilm) {
        this.films.push(firstFilm);
      }
    }
  }  
}
