import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Film} from "../../modele/film.modele";

//session
let createSession = 'https://api.themoviedb.org/3/authentication/guest_session/new'
let getToken = 'authentication/token/new';
let postToken = 'authentication/session/new'

//url de base
let baseURL = 'https://api.themoviedb.org/3/'

//Infos
let movieDetail = 'movie/12?language=en-US';
let trendyReal = 'trending/person/day?language=en-US';
let DiscoverReal  ='discover/movie?with_crew=525';
let genreList=  'genre/movie/list?language=e'
let ratingMovie = 'movie/1022796/rating?'
let ratedMovies = '/account/11787154/rated/movies'
let movieCertification = 'certification/movie/list'
let genreMovies = 'discover/movie?with_genres=28'
let popularMovies = 'movie/popular?language=en-US&page=1'
let credential1 = 'credits?language=en-US';
let postMovieList  = 'list/{list_id}/remove_item'



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

  //ajouter un rating
  public postRateMovie(body: any): Observable<any>{
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmY2YjIzZWNkZDdmYzFlZThiNGRiZWM2ZjQ0ZDA4ZiIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-VFjKNJEh7UmiL2MGuqYAugW-K1wy9j15jUf59w3Z4'
      },
      body: '{value : 8}'
    };
    console.log(JSON.stringify(body[0]))
    return this.http.post(baseURL+ `movie/${body[1]}/rating?api_key=285c1722e803e8e4e170fdba58679c28`,{value : body[0]},options);
  }

  //consulter rating
  public getRatedMovies():Observable<{ results: Film[] }>{
    return this.http.get<{ results: Film[] }>(baseURL+ratedMovies,options)
  }
  public postRequest() {
    const tt = 'https://api.themoviedb.org/3/movie/111/rating?api_key=abf6b23ecdd7fc1ee8b4dbec6f44d08f&d&query=$star&language=us-US';
    const ee = {
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmY2YjIzZWNkZDdmYzFlZThiNGRiZWM2ZjQ0ZDA4ZiIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-VFjKNJEh7UmiL2MGuqYAugW-K1wy9j15jUf59w3Z4'
      }),
      body: JSON.stringify({ value: 8.5 })
    };

    return this.http.post(tt, ee);
  }

}


