import { Injectable } from '@angular/core';
import {Film} from "../../Modele/film.modele";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RatedMoviesService {
  ratedList : Film[] =[]
  isRated : boolean = false


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

  setSelectedData(data : Film) {
    this.selectedDataSubject.next(data);
    const foundItem = this.ratedList.find(f => f.id === data.id)
    if(foundItem){
      foundItem.rating =data.rating
      this.isRated = true
      console.log("mise à jour de la note à ", foundItem.rating)
    }else{
      this.ratedList.push(data)
      console.log("ajoute dans la liste de ", data.rating)
    }
  }
}
