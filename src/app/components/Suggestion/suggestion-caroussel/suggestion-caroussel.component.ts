import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film.modele';
import { ApiService } from 'src/app/services/api/api.service';
import { SuggestionService } from 'src/app/services/suggestion/suggestion.service';

@Component({
  selector: 'app-suggestion-caroussel',
  templateUrl: './suggestion-caroussel.component.html',
  styleUrls: ['./suggestion-caroussel.component.scss']
})
export class SuggestionCarousselComponent implements OnInit {
  similarFilms : Film[] = [] ;
  @Input() film : Film | undefined ;

  constructor(private api: ApiService, private suggestionService : SuggestionService) {}

  ngOnInit(): void {
    if(this.film?.id){
      this.api.getSimilarMovies(this.film.id).subscribe( response =>{
        this.similarFilms = response.results.filter(film => film.poster_path !== null).slice(0,15); //sans ceux avec affiche vide
      })
    }
  }

  //openFilmDetails(film : Film) {
    //this.suggestionService.AddFilmClicked(film) ;
  //}

}
