import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Modele/film.modele';
import { RatedMoviesService } from 'src/app/Services/rated-movies/rated-movies.service';


@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.scss']
})
export class RatingPageComponent implements OnInit {
  public films : Film[] = []
  protected readonly Math = Math;

  constructor( private rateService : RatedMoviesService) {}

  ngOnInit(): void {
    this.rateService.selectedData$.subscribe((films: Film[]) => {
      this.films = films;
    });
  }
  public popMovie(film: Film): void {
    this.rateService.removeFromFavorites(film.id);
  }

}
