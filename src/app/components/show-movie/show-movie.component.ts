import { Component } from '@angular/core';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent {
  public newBackgroundColor: any;
  public color: any;
  public colors : string[] = ['orange','green', 'blue','yellow'];

  public changeBackground(color : any){
    console.log("bien recu ")
    this.newBackgroundColor = color;
  }
}
