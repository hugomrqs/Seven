import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/Modele/film.modele';
import { ApiService } from 'src/app/Services/api/api.service';
import { SuggestionService } from 'src/app/Services/suggestion/suggestion.service';

@Component({
  selector: 'app-suggestion-page',
  templateUrl: './suggestion-page.component.html',
  styleUrls: ['./suggestion-page.component.scss']
})
export class SuggestionPageComponent implements OnInit {
  filmsClicked : Film[] = [];

  constructor(private suggestionService : SuggestionService, private api : ApiService) {}

  ngOnInit() {
    //abonnement observable, car OnInit = uniquement initialisation du component. //Onchanges plus propice si on avait eu un @Input() à la place d'un service pour transmettre les données
    this.suggestionService.results$.subscribe(results => {
      this.filmsClicked = results.slice(-5).reverse(); //les 5 derniers films cliqués, le dernier cliqué sera le premier affiché
    });
  }
}
