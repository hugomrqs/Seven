import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Modele/film.modele';
import { SuggestionService } from 'src/app/Services/suggestion/suggestion.service';

@Component({
  selector: 'app-suggestion-page',
  templateUrl: './suggestion-page.component.html',
  styleUrls: ['./suggestion-page.component.scss']
})
export class SuggestionPageComponent implements OnInit {
  public filmsClicked : Film[] = [];

  constructor(private suggestionService : SuggestionService) {}

  ngOnInit() {
    //abonnement observable, car OnInit = uniquement initialisation du component. //Onchanges plus propice si on avait eu un @Input() à la place d'un service pour transmettre les données
    this.suggestionService.results$.subscribe(results => {
      this.filmsClicked = results.slice(-5).reverse(); //les 5 derniers films cliqués, le dernier cliqué sera le premier affiché
    });
    window.scroll({
      top: 0, 
    });
  }
}
