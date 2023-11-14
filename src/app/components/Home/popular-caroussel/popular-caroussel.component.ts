import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from "../../../Modele/film.modele";
import { ApiService } from "../../../Services/api/api.service";
import { HomePageDataService } from "../../../Services/home-page-data/home-page-data.service";
import { SuggestionService } from 'src/app/Services/suggestion/suggestion.service';

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
    this.suggestionService.addFilmClicked(film);
    this.scrollDown()
  }
  
  private scrollDown() : void {
    window.scroll({
      top: window.scrollY + 1000, // Scroll down by 100 pixels
      behavior: 'smooth', // Make it smooth
    });
  }
}
