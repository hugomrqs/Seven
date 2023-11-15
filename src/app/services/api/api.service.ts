import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "../../Modele/film.modele";

//url de base
let baseURL = 'https://api.themoviedb.org/3/'

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmY2YjIzZWNkZDdmYzFlZThiNGRiZWM2ZjQ0ZDA4ZiIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-VFjKNJEh7UmiL2MGuqYAugW-K1wy9j15jUf59w3Z4'
  }
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {
  }

  //Recherche de film via une query (string)
  public getSearchMovie(query: string): Observable<{ results: Film[] }> {
    const url = `${baseURL}search/movie?query=${query}&include_adult=true&language=en-US&page=1`;
    return this.http.get<{ results: Film[] }>(url,options);
  }

  //similar movies
  public getSimilarMovies(movie_id : number) : Observable<{ results: Film[] }> {
    const url = `${baseURL}movie/${movie_id}/similar?language=en-US&page=1`;
    return this.http.get<{ results: Film[] }>(url, options) ;
  }

  //popular movies
  public getPopularMovies(): Observable<{ results: Film[] }>  {
    const url = `${baseURL}movie/popular?language=en-US&page=1`;
    return this.http.get<{ results: Film[] }>(url, options) ;
  }

}


