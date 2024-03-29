import { Injectable } from '@angular/core';
import { Film } from 'src/app/Modele/film.modele';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTitleService {

  //Resultat de mon observable, BehaviorSubject réagi en temps réel au changements == efficace pour de la recherche en direct
  private resultsSubject = new BehaviorSubject<Film[]>([]); 
  //Observable
  results$: Observable<Film[]> = this.resultsSubject.asObservable();

  
  public setResultFilms(data: Film[]) {
    this.resultsSubject.next(data);
  }
  //getter pas nécéssaire car les components s'abonne à l'observable pour être notifier et pour récupérer le resultat
}

