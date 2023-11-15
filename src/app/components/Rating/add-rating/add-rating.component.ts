import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Film } from "../../../Modele/film.modele";
import { RatedMoviesService } from 'src/app/Services/rated-movies/rated-movies.service';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit, OnChanges{
  public SelectedStar : number = 0 ;
  public maxRatingArr : number[] = [] ;

  @Input() public rating : number = 0 ;
  @Input() public filmId : Film | undefined ;
  public rated : boolean = false ;

  constructor(private rateService : RatedMoviesService) {}

  ngOnInit(): void {
    this.maxRatingArr = Array(5).fill(0)
    this.rateService.selectedData$.subscribe(() => {
      this.updateIsFilmRate();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['filmId'] && this.filmId){
        this.updateIsFilmRate();
    }
  }

  public HandleMouseEnter(index: number) {
    this.giveRating(index) ;
  }

  public HandleMouseLeave() {
    (this.rated && this.filmId)? this.SelectedStar = this.filmId.rating : this.SelectedStar =this.rating;
  }

  public Rating(index: number) {
    if (this.filmId) {
     this.filmId.rating = this.giveRating(index);
     this.rateService.setSelectedData(this.filmId);
    }
  }

  private updateIsFilmRate(): void {
    const currentData = this.rateService.getCurrentData();
    this.rated = currentData.some(f => f.id === this.filmId?.id);
    this.HandleMouseLeave() ;
  }

  private giveRating(index: number):number{
    return this.SelectedStar = index + 1 ;
  }
}
