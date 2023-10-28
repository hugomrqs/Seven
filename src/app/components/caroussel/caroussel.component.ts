import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {ApiService} from "../../service/api.service";
import {HomePageDataService} from "../../service/home-page-data.service";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],

})
export class CarousselComponent implements OnInit {

  films : any
  @Output() event = new EventEmitter;
  @Input() public color : string[] = [];

  sendData( film :Film) {
    // Les données que vous souhaitez partager, par exemple, un objet Film
    this.data.setSelectedData(film);
  }
  constructor(private api: ApiService, private data : HomePageDataService) {
  }
  ngOnInit(): void {
   this.api.getPopularMovies().subscribe( response =>{
         this.films = response.results.slice(2,15);
       console.log(this.films)
     }
    )
  }
}
