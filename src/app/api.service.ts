import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
}


const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjMTcyMmU4MDNlOGU0ZTE3MGZkYmE1ODY3OWMyOCIsInN1YiI6IjYxZTgyOGM1NDM5OTliMDA2ZDIxMmYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfo3ukg4-FcWS9fO1pQbgLKGbc60E_NWD-7JTlBjMI'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('erruuuuuuor:' + err));
