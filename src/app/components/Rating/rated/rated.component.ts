import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {Film} from "../../../modele/film.modele";
import {RatedMoviesService} from "../../../services/rated-movies/rated-movies.service";

@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.scss']
})
export class RatedComponent implements OnInit {
  films : Film[] = []

  constructor(private api: ApiService, private rate : RatedMoviesService) {}

  ngOnInit(): void {
    this.films = this.rate.ratedList.reverse() ;
  }
}
