import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film.modele';
import { SearchTitleService } from 'src/app/services/search-title/search-title.service';
import {HomePageDataService} from "../../services/home-page-data/home-page-data.service";

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})

export class SearchResultPageComponent implements OnInit {
  resultFilms: Film[] = [] ;

  constructor(private searchTitleService : SearchTitleService,  private data : HomePageDataService) {}

  sendData(film : Film) {
    // Les données que vous souhaitez partager, par exemple, un objet Film
    this.data.setSelectedData(film);
    console.log(film)
  }
  ngOnInit() {
    //abonnement observable, car OnInit = uniquement initialisation du component. //Onchanges plus propice si on avait eu un @Input() à la place d'un service pour transmettre les données
    this.searchTitleService.results$.subscribe(results => {
      this.resultFilms = results.filter(film => film.poster_path !== null); //certain film n'ont pas d'affiche, on les exclus
      console.log(this.resultFilms);
    });
  }
}

