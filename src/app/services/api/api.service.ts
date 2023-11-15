import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "../../Modele/film.modele";

//session
let createSession = 'https://api.themoviedb.org/3/authentication/guest_session/new'
let getToken = 'authentication/token/new';

//url de base
let baseURL = 'https://api.themoviedb.org/3/'

//Infos
let popularMovies = 'movie/popular?language=en-US&page=1'

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmY2YjIzZWNkZDdmYzFlZThiNGRiZWM2ZjQ0ZDA4ZiIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-VFjKNJEh7UmiL2MGuqYAugW-K1wy9j15jUf59w3Z4'
  }
};

const session = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmY2YjIzZWNkZDdmYzFlZThiNGRiZWM2ZjQ0ZDA4ZiIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-VFjKNJEh7UmiL2MGuqYAugW-K1wy9j15jUf59w3Z4'
  }
}


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {
  }

  //config
  public getConfig() {
    this.http.get(createSession,session);
    return this.http.get(baseURL+getToken,options) ;
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
    return  this.http.get<{ results: Film[] }>(baseURL+popularMovies,options);
  }

  //consulter rating
  public getRatedMovies(page : number):Observable<{ results: Film[] }>{
   return this.http.get<{ results: Film[] }>(baseURL+`/account/11787154/rated/movies?language=en-US&page=${page}&sort_by=created_at.asc`,options)
  }

  //post du ratings dans l'api
  public postRequest(id : String, note : number) {
    const tt = `https://api.themoviedb.org/3/movie/${id}/rating`;
    const ee = {
      method: 'POST',
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmY2YjIzZWNkZDdmYzFlZThiNGRiZWM2ZjQ0ZDA4ZiIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-VFjKNJEh7UmiL2MGuqYAugW-K1wy9j15jUf59w3Z4'
      }),
      body: JSON.stringify({ value: 3})
    };
    return this.http.post(tt, ee);
  }

}


