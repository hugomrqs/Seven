import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {Film} from "../../../modele/film.modele";
import {RateMovieService} from "../../../services/rate-movie/rate-movie.service";
import {RatedMoviesService} from "../../../services/rated-movies/rated-movies.service";


@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit, OnChanges{
  SelectedStar=0
  previousSelection : number = 0
  maxRatingArr : number[] = []

  @Input() rating : number = 0 ;
  @Input() filmId: Film | undefined ;
  rated :boolean = false
  myRate : number  = 0

  constructor(private rate : RatedMoviesService) {}

  ngOnInit(): void {
    this.maxRatingArr = Array(5).fill(0)
  }

  HandleMouseEnter(index: number) {
    this.giveRating(index)
  }

  HandleMouseLeave() {
    this.SelectedStar =  Math.ceil(this.rating / 2)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.filmId !== undefined) {
      if (changes['filmId'] && this.filmId?.rating !== undefined) {
        this.SelectedStar = Math.floor(this.filmId.vote_average / 2) + 1;
      } else {
        // Vérifie si rating est différent de 0
        if (this.rating !== 0) {
          this.SelectedStar = Math.floor(this.rating / 2) + 1;
        }
      }
    }
  }

  Rating(index: number) {
    this.giveRating(index);
    this.previousSelection = this.SelectedStar;

    // Set rated to true
    this.rated = true;

    if (this.filmId !== undefined) {
      this.filmId.rating = this.SelectedStar+1;
      this.rate.setSelectedData(this.filmId);
    }
  }

  giveRating(index: number):number{
    return this.SelectedStar = index + 1
  }
  }

