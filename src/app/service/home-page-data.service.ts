import { Injectable } from '@angular/core';
import {Film} from "../modele/film.modele";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class HomePageDataService {
  private selectedMovies : Film[] =[];
  private selectedDataSubject  = new BehaviorSubject<Film>({
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
    vote_count: 0
  });
  selectedData$ = this.selectedDataSubject.asObservable();

  constructor() {}

  setSelectedData(data: Film) {
    this.selectedDataSubject.next(data);
    this.selectedMovies.push(data)
    console.log(this.selectedMovies)
  }
}