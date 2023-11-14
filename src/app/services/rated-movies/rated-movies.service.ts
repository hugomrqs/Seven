import { Injectable } from '@angular/core';
import {Film} from "../../modele/film.modele";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RatedMoviesService {
  ratedList :Film[] =[]

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
    const foundItem = this.ratedList.find(f => f.id === data.id)
    if(foundItem){
      foundItem.rating =data.rating
    }else{
      this.ratedList.push(data)
    }
  }
  constructor() { }
}
