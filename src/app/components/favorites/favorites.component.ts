import {Component, OnInit} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{
  resultFilms : any;
  films : Film[]=[]
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getRatedMovies().subscribe(data => {
      this.resultFilms = data
      this.films = this.resultFilms?.results
    })
  }
}
