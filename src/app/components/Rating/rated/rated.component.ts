import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {Film} from "../../../modele/film.modele";
import {RateMovieService} from "../../../services/rate-movie/rate-movie.service";

@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.scss']
})
export class RatedComponent implements OnInit {
  films : Film[] = []

  constructor(private api: ApiService, private rate : RateMovieService) {}

  ngOnInit(): void {
 this.films=this.rate.ratedList.reverse()
  }
}
