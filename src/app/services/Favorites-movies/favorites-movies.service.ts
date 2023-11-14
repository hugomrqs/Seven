import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Film} from "../../Modele/film.modele";

@Injectable({
  providedIn: 'root'
})
export class FavoritesMoviesService {
  private selectedDataSubject  = new BehaviorSubject<Film[]>([]);
  selectedData$ : Observable<Film[]> = this.selectedDataSubject.asObservable();

  setSelectedData(data: Film) {
    const currentData = this.selectedDataSubject.getValue(); // Obtenir la valeur actuelle
    this.selectedDataSubject.next([data, ...currentData]); // Ajouter le nouveau film à la liste (en 1ère position)
  }
}
