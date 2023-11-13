import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {Film} from "../../../modele/film.modele";
import {RateMovieService} from "../../../services/rate-movie/rate-movie.service";

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

  @Input() rating : number =0
  @Input() filmId: Film | undefined

  constructor(private rate : RateMovieService) {}

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0)
    if(this.rating !==0){
      this.SelectedStar = Math.ceil(this.rating ) /2
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
      this.filmId.rating = this.SelectedStar
      this.rate.setSelectedData(this.filmId)
      console.log(this.filmId.title, " + ",this.filmId.rating)
    }
  }
}
