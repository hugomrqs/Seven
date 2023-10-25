import {Component, OnInit} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],

})
export class CarousselComponent implements OnInit {
  filmData : Film | undefined
  genreNames: string[] = [];
  films : any

  constructor(private api: ApiService) {
  }




  ngOnInit(): void {
   this.api.getPopularMovies().subscribe( (response) =>{
         this.films = response.results.slice(0,7);
       console.log(this.films)

     }
    )

  }

}
