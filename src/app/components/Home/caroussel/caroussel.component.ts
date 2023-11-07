import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../../../modele/film.modele";
import {ApiService} from "../../../services/api/api.service";
import {HomePageDataService} from "../../../services/home-page-data/home-page-data.service";
import { SuggestionService } from 'src/app/services/suggestion/suggestion.service';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
})

export class CarousselComponent implements OnInit {

  films : Film[] = [] ;

  constructor(private api: ApiService, private data : HomePageDataService, private suggestionService : SuggestionService) {}


  sendData(film : Film) {
    this.data.setSelectedData(film);
    this.suggestionService.AddFilmClicked(film) ;
  }

  ngOnInit(): void {
   this.api.getPopularMovies().subscribe( response =>{
         this.films = response.results.slice(0,19);
     }
    )
  }
}
