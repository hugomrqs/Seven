import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from "../../../modele/film.modele";
import { ApiService } from "../../../services/api/api.service";
import { HomePageDataService } from "../../../services/home-page-data/home-page-data.service";
import { SuggestionService } from 'src/app/services/suggestion/suggestion.service';

@Component({
  selector: 'app-popular-caroussel',
  templateUrl: './popular-caroussel.component.html',
  styleUrls: ['./popular-caroussel.component.scss'],
})

export class PopularCarousselComponent implements OnInit {
  films: Film[] = [];

  constructor(private api : ApiService, private homePageService : HomePageDataService, private suggestionService : SuggestionService) { }

  ngOnInit() : void {
    this.api.getPopularMovies().subscribe(response => {
      this.films = response.results.slice(0, 15);
    })
  }
  
  sendData(film : Film) : void {
    this.homePageService.setSelectedData(film);
    this.suggestionService.AddFilmClicked(film);
    this.scrollDown()
  }
  
  scrollDown() : void {
    window.scroll({
      top: window.scrollY + 1000, // Scroll down by 100 pixels
      behavior: 'smooth', // Make it smooth
    });
  }
}
