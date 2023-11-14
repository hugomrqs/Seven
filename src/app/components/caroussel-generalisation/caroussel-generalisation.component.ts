import { Component, Input } from '@angular/core';
import { Film } from 'src/app/modele/film.modele';

@Component({
  selector: 'app-caroussel-generalisation',
  templateUrl: './caroussel-generalisation.component.html',
  styleUrls: ['./caroussel-generalisation.component.scss']
})
export class CarousselGeneralisationComponent {
  @Input() productClass: string = 'product-home'; //valeur par défaut, evite un passage d'input dans suggestion-carroussel
  @Input() containerClass: string = 'container-fluid-home'; //valeur par defaut, evite un passage d'input dans suggestion-carroussel
  @Input() films: Film[] = [];
  isDataLoaded: boolean = false ;

  ngOnInit() {
    // Simule un délai en millisecondes (pour laisser le temps de charger toute les infos (images) et avoir un affichage fluide, sinon bouton du carroussel apparaissent trop tôt)
    setTimeout(() => {
      if (this.films) {
        this.isDataLoaded = true;
      }
    }, 400);
  }

  //Pour prev/next le caroussel
  prev() : void {
    if (this.films.length > 1) {
      const lastFilm = this.films.pop();
      if(lastFilm){
        this.films.unshift(lastFilm);
      }
    }
  }

  next() : void {
    if (this.films.length > 1) {
      const firstFilm = this.films.shift();
      if (firstFilm) {
        this.films.push(firstFilm);
      }
    }
  }  
}
