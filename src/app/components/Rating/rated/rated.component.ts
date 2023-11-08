import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {HomePageDataService} from "../../../services/home-page-data/home-page-data.service";
import {Film} from "../../../modele/film.modele";

@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.scss']
})
export class RatedComponent implements OnInit {
  films : Film[] = []

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getRatedMovies().subscribe(data => {
      this.films = data.results ;
      console.log(data) ;
    })
  }
}