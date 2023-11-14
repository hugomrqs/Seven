import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {Film} from "../../../modele/film.modele";
import {RatedMoviesService} from "../../../services/rated-movies/rated-movies.service";

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit{
  @Input() maxRating : number = 5
  @Input() SelectedStar=0
  previousSelection : number = 0
  maxRatingArr : number[] = []

  @Input() rating : number = 0 ;
  @Input() filmId: Film | undefined ;

  constructor(private rate : RatedMoviesService) {}

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0)
    if(this.filmId?.rating !==0 && this.filmId?.rating !== undefined){
      this.SelectedStar = this.filmId?.rating
    }else{
      this.SelectedStar = Math.ceil(this.rating / 2) +1
    }
  }

  HandleMouseEnter(index: number) {
    this.SelectedStar=index+1
  }

  HandleMouseLeave() {
    if(this.previousSelection!==0){
      this.SelectedStar = this.previousSelection
    }else{
      this.SelectedStar =  Math.ceil(this.rating / 2)
    }
  }

  Rating(index: number) {
      this.SelectedStar = index + 1
      this.previousSelection = this.SelectedStar
    if(this.filmId !==undefined){
      this.filmId.rating = this.SelectedStar +1
      this.rate.setSelectedData(this.filmId )
    }
  }
}
