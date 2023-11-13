import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
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
      this.api.getRatedMovies(1).subscribe(data => {
        this.films = data.results ;
      })
      this.api.getRatedMovies(2).subscribe(data => {
        this.films = data.results ;
     })

  }
}
