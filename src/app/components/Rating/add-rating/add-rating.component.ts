import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Film} from "../../../modele/film.modele";
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

  @Input() rating  : number = 0 ;
  @Input() filmId: Film | undefined ;
  rated :boolean = false
  myRate : number  = 0

  constructor(private rate : RatedMoviesService) {}

  ngOnInit(): void {
    this.maxRatingArr = Array(5).fill(0)
    this.HandleMouseLeave()
  }

  HandleMouseEnter(index: number) {
    this.giveRating(index)
  }

  HandleMouseLeave() {
    (this.rated && this.filmId !==undefined )?this.SelectedStar =this.filmId.rating : this.SelectedStar =this.rating;
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (this.filmId !== undefined) {
      if (changes['filmId'] ){
        this.HandleMouseLeave()
        console.log("je suis le film", this.filmId.title)
        console.log("je suis le av", this.rating ," jai ete rate a ", this.filmId.rating)
      }
    }
  }

  Rating(index: number) {
    this.giveRating(index);
    this.previousSelection = this.SelectedStar;
    console.log(this.filmId)

    //faut comprendre pourquoi dans le rated il passe pas ici, le filmId es
    if (this.filmId !== undefined) {
      console.log("test je repasse par la")
      this.filmId.rating = this.SelectedStar;
      this.rate.setSelectedData(this.filmId);
    }
    this.rated = true;
  }

  giveRating(index: number):number{
    return this.SelectedStar = index + 1
  }
  }

