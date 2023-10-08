import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film} from "./modele/film.modele";
import {Observable, Subscription} from "rxjs";

let configUrl = 'authentication/token/new'
let baseURL = 'https://api.themoviedb.org/3/'
let movieDetail = 'movie/12?language=en-US';
let genreList: string=  'genre/movie/list?language=e'

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjMTcyMmU4MDNlOGU0ZTE3MGZkYmE1ODY3OWMyOCIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfo3ukg4-FcWS9fO1pQbgLKGbc60E_NWD-7JTlBjMI'
  },
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {

  }

  //config
  public getConfig() {
    console.log('eeeeeeeeeeeeeeee' );
    return  this.http.get(baseURL+configUrl,options);
  }

  //detail d'un film
  public getMovieDetail():Observable<Film> {
    console.log('eeeeeeeeeeeeeeee' );
    return  this.http.get<Film>(baseURL+movieDetail,options);
  }
  //list des genre
  public getGenres(): Observable<any>{
    return this.http.get(baseURL+genreList,options);
  }

  //liste des films pour un GENRE

}



