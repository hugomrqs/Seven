import {Component, OnInit} from '@angular/core';
import { Film } from 'src/app/Modele/film.modele';
import { RatedMoviesService } from 'src/app/Services/rated-movies/rated-movies.service';


@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.scss']
})
export class RatedComponent implements OnInit {
  public films : Film[] = []

  constructor( private rateService : RatedMoviesService) {}

  ngOnInit(): void {
    this.films = this.rateService.ratedList.reverse() ;
  }

  protected readonly Math = Math;
}
