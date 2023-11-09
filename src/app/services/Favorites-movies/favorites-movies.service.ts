import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Film} from "../../modele/film.modele";

@Injectable({
  providedIn: 'root'
})
export class FavoritesMoviesService {

  favoriteList :Film[] =[]
  favMovie : boolean = true


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
    vote_count: 0,
    rating :0
  });

  selectedData$ = this.selectedDataSubject.asObservable();

  setSelectedData(data: any) {
      this.selectedDataSubject.next(data);
if(!this.favoriteList.find(f => f.id === data.id))
    this.favoriteList.push(data)
  }
  constructor() { }
}
