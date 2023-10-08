import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {Film} from "../../modele/film.modele";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit{
  filmData : Film | undefined
  genreNames: string[] = [];
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {


    this.api.getMovieDetail().subscribe( data => {
      this.filmData = data
      console.log(data?.id)



      this.api.getGenres().subscribe( (response) =>{
       console.log( this.genreNames = response.genres.map((genre: any) => genre.name));
      }
    )
    });

  }

}
