import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
let ratingMovie = 'movie/496243/rating?'
let ratedMovies = '/account/11787154/rated/movies'
let movieCertification = 'certification/movie/list'
let genreMovies = 'discover/movie?with_genres=28'
let popularMovies = 'movie/popular?language=en-US&page=1'
let credential1 = 'credits?language=en-US';
let postMovieList  = 'list/{list_id}/remove_item'



const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjMTcyMmU4MDNlOGU0ZTE3MGZkYmE1ODY3OWMyOCIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfo3ukg4-FcWS9fO1pQbgLKGbc60E_NWD-7JTlBjMI'
  }
};

const session = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjMTcyMmU4MDNlOGU0ZTE3MGZkYmE1ODY3OWMyOCIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfo3ukg4-FcWS9fO1pQbgLKGbc60E_NWD-7JTlBjMI'
  }
}

const rateOptions = {
   headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjMTcyMmU4MDNlOGU0ZTE3MGZkYmE1ODY3OWMyOCIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfo3ukg4-FcWS9fO1pQbgLKGbc60E_NWD-7JTlBjMI'
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

  //detail d'un film doit prendre en param l'id d'un film
  public getMovieDetail():Observable<Film> {
    return  this.http.get<Film>(baseURL+movieDetail,options);
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
  public postMovieList(body : string):Observable<any>{
    return this.http.post<any>(baseURL+postMovieList,body,options)
  }

  //list des genres
  public getGenres(): Observable<any>{
    return this.http.get(baseURL+genreList,options);
  }

  //liste des films pour un GENRE
  public getMoviesGenre(): Observable<any>{
    return this.http.get(baseURL+genreMovies,options);
  }

  //list des fillms par réal (doit prendre en parametre l'id du réal)
  public getRealMovies(): Observable<any>{
    return this.http.get(baseURL+DiscoverReal,options);
  }

  //listes des gens trendy
  public getTrendyReal(): Observable<any>{
    return this.http.get(baseURL+trendyReal,options);
  }

  //liste des rewards
  public getCertification():Observable<any>{
    return this.http.get(baseURL+movieCertification,options)
  }

  //ajouter un rating
  public postRateMovie(value :any): Observable<any>{
    console.log("bien envoyé")
    return this.http.post(baseURL+ratingMovie,value,rateOptions);
  }

  //consulter rating
  public getRatedMovies():Observable<{ results: Film[] }>{
    return this.http.get<{ results: Film[] }>(baseURL+ratedMovies,options)
  }

}


