import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";


let configUrl = 'https://api.themoviedb.org/3/movie/122?language=en-US';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjMTcyMmU4MDNlOGU0ZTE3MGZkYmE1ODY3OWMyOCIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfo3ukg4-FcWS9fO1pQbgLKGbc60E_NWD-7JTlBjMI'
  }
};
@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    getConfig()
  }
}

function getConfig() {
  console.log('la fonction s est lancée' )
  return http.get(configUrl, options);

}

