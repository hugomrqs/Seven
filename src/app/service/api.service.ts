import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

let configUrl = 'https://api.themoviedb.org/3/movie/12?language=en-US';

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
  constructor(private http: HttpClient) { }

  public getConfig() {
    console.log('la fonction s est lancée' );
    return this.http.get(configUrl,options).subscribe();
  }
}


