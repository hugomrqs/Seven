import {Component, OnInit} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit{
  films : Film[] = []

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    //A UPDATE
    this.api.getRatedMovies().subscribe(data => {
      this.films = data.results
    })
  }
}
