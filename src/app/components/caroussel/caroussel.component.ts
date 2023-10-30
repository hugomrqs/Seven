import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {ApiService} from "../../services/api/api.service";
import {HomePageDataService} from "../../services/home-page-data/home-page-data.service";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
})

export class CarousselComponent implements OnInit {

  films : Film[] = [] ;
  @Output() event = new EventEmitter;
  @Input() public color : string[] = [];

  constructor(private api: ApiService, private data : HomePageDataService) {}


  sendData(film : Film) {
    // Les données que vous souhaitez partager, par exemple, un objet Film
    this.data.setSelectedData(film);
  }

  ngOnInit(): void {
   this.api.getPopularMovies().subscribe( response =>{
         this.films = response.results.slice(2,15);
     }
    )
  }

}
