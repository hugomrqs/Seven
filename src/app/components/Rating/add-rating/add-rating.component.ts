import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit{
  @Input() maxRating : number = 5
  @Input() SelectedStar=0
  previousSelection : number = 0
  maxRatingArr : any = []


  @Output()
  onRating:EventEmitter<number> = new EventEmitter<number>()

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0)
  }

  HandleMouseEnter(index: number) {
    this.SelectedStar=index+1
  }

  HandleMouseLeave() {
    if(this.previousSelection!==0){
      this.SelectedStar = this.previousSelection
    }else{
      this.SelectedStar = 0
    }
  }

  Rating(index: number) {
    this.SelectedStar = index+1
    this.previousSelection = this.SelectedStar
    this.onRating.emit(this.SelectedStar+1)
    console.log("post route")
  }
}
