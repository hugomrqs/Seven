import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {concat, forkJoin, Observable, Subscription} from "rxjs";
import {Film} from "../../Modele/film.modele";

//session
let createSession = 'https://api.themoviedb.org/3/authentication/guest_session/new'
let getToken = 'authentication/token/new';
let postToken = 'authentication/session/new'

//url de base
let baseURL = 'https://api.themoviedb.org/3/'

//Infos
let DiscoverReal  ='discover/movie?with_crew=525';
let genreList=  'genre/movie/list?language=e'
let popularMovies = 'movie/popular?language=en-US&page=1'
let credential1 = 'credits?language=en-US';


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
    return this.http.get(baseURL+getToken,options)
  }

  //Recherche de film via une query (string)
  public getSearchMovie(query: string): Observable<{ results: Film[] }> {
    const url = `${baseURL}search/movie?query=${query}&include_adult=true&language=en-US&page=1`;
    return this.http.get<{ results: Film[] }>(url,options);
  }

  //similar movies
  public getSimilarMovies(movie_id : number) : Observable<{ results: Film[] }> {
    const url = `${baseURL}movie/${movie_id}/similar?language=en-US&page=1`;
    return this.http.get<{ results: Film[] }>(url, options)
  }

  public getCredentials(id:number):Observable<any> {
    return  this.http.get<any>(baseURL+"movie/" +id + credential1 +"/",options);
  }

  public getPopularMovies():Observable<any> {
    return  this.http.get<any>(baseURL+popularMovies,options);
  }

  public postSession(body : string):Observable<any>{
    return this.http.post(baseURL+postToken,body,options)
  }

  //list des genres
  public getGenres(): Observable<any>{
    return this.http.get(baseURL+genreList,options);
  }

  //list des fillms par réal (doit prendre en parametre l'id du réal)
  public getRealMovies(): Observable<any>{
    return this.http.get(baseURL+DiscoverReal,options);
  }

  //consulter rating
  public getRatedMovies(page : number):Observable<{ results: Film[] }>{
   return this.http.get<{ results: Film[] }>(baseURL+`/account/11787154/rated/movies?language=en-US&page=2&sort_by=created_at.asc`,options)
  }
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


