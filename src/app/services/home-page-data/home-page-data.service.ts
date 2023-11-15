import { Injectable } from '@angular/core';
import { Film } from "../../Modele/film.modele";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {
  private resultsSubject  = new BehaviorSubject<Film>({
    adult: false,
    backdrop_path: "",
    genres: [],
    id: 0,
    imdb_id: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    runtime: 0,
    tagline: "",
    title: "",
    vote_average: 0,
    vote_count: 0,
    rating :0
  });
  results$ : Observable<Film> = this.resultsSubject.asObservable();

  public setSelectedData(data: Film) {
    this.resultsSubject.next(data);
  }
}

