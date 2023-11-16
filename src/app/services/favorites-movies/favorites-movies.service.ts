// favorites-movies.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film } from '../../Modele/film.modele';

@Injectable({
  providedIn: 'root'
})
export class FavoritesMoviesService {
  private selectedDataSubject = new BehaviorSubject<Film[]>([]);
  public selectedData$: Observable<Film[]> = this.selectedDataSubject.asObservable();
  
  public setSelectedData(film: Film): void {
    const currentData = this.selectedDataSubject.getValue();
    //on ajoute seulement les films non existants dans la liste
    const filmExists = currentData.some(f => f.id === film.id);
    if (!filmExists) {
      this.selectedDataSubject.next([film, ...currentData]);
    }
  }

  public removeFromFavorites(filmId: number): void {
    const currentData = this.selectedDataSubject.getValue();
    const updatedData = currentData.filter(f => f.id !== filmId);
    this.selectedDataSubject.next(updatedData);
  }

  public getCurrentData(): Film[] {
    return this.selectedDataSubject.getValue();
  }
}
