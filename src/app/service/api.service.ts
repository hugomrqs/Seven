import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Film} from "../modele/film.modele";

//session
let createSession = 'authentication/guest_session/new'
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
let similarMovies ='496243/recommendations'
let movieCertification = 'certification/movie/list'
let genreMovies = 'discover/movie?with_genres=28'
let popularMovies = 'movie/popular?language=en-US&page=1'

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjMTcyMmU4MDNlOGU0ZTE3MGZkYmE1ODY3OWMyOCIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfo3ukg4-FcWS9fO1pQbgLKGbc60E_NWD-7JTlBjMI'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  //config
  public getConfig() {
    this.http.get(baseURL+createSession,options);
    return this.http.get(baseURL+getToken,options)

  }

  //detail d'un film doit prendre en param l'id d'un film
  public getMovieDetail():Observable<Film> {
    console.log('eeeeeeeeeeeeeeee' );
    return  this.http.get<Film>(baseURL+movieDetail,options);
  }
  public getPopularMovies():Observable<any> {
    return  this.http.get<any>(baseURL+popularMovies,options);
  }
  public postSession():Observable<any>{
    return this.http.post(baseURL+postToken,"" ,options)
  }
  //list des genre
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

  //listes des gens trnedy
  public getTrendyReal(): Observable<any>{
    return this.http.get(baseURL+trendyReal,options);
  }

  //liste des rewards
  public getCertification():Observable<any>{
    return this.http.get(baseURL+movieCertification,options)
  }


  //ajouter un rating
  public postRateMovie(): Observable<any>{
    let body = {value : 2}
    return this.http.post(baseURL+ratingMovie,body,options);
  }

  //consulter rating

  public getRatedMovies():Observable<any>{
    return this.http.get(baseURL+ratedMovies,options)
  }

  //similar movies
  public getSimilarMovies():Observable<any>{
    return this.http.get(baseURL+similarMovies,options)
  }
}


