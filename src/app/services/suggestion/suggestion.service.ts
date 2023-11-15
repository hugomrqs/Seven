import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film } from 'src/app/Modele/film.modele';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  //Resultat de mon observable, BehaviorSubject réagi en temps réel au changements == efficace pour de la recherche en direct
  private filmsClicked = new BehaviorSubject<Film[]>([]); 
  //Observable
  results$: Observable<Film[]> = this.filmsClicked.asObservable();

  
  addFilmClicked(data: Film) {
    const currentData = this.filmsClicked.getValue(); // Obtenir la valeur actuelle
    const filteredData = currentData.filter(film => film.id !== data.id); // Exclure les doublons (1ere occurence) avec le même ID - sert à garder la dernière occurence du film cliqué, pour les carroussel
    this.filmsClicked.next([...filteredData, data]); // Ajouter le nouveau film à la liste
  }
  //getter pas nécéssaire car les components s'abonne à l'observable pour être notifier et pour récupérer le resultat
}
