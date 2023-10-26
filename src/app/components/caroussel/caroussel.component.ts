import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],

})
export class CarousselComponent implements OnInit {
  filmData : Film | undefined
  genreNames: string[] = [];
  films : any
  @Output() event = new EventEmitter;
  @Input() public color : string[] = [];

  public addEvent(value: string){
    console.log(value)
    this.event.emit(value);
  }
  constructor(private api: ApiService) {
  }
  ngOnInit(): void {
   this.api.getPopularMovies().subscribe( response =>{
         this.films = response.results.slice(2,15);
       console.log(this.films)
     }
    )
  }
}
