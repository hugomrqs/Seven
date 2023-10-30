import {Component, OnInit} from '@angular/core';
import {Film} from "../../modele/film.modele";
import {HomePageDataService} from "../../service/home-page-data.service";

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent  implements OnInit{
  receivedData: Film | undefined;
  constructor(private data : HomePageDataService) {}

  ngOnInit(): void {
    this.data.selectedData$.subscribe(data => {
      this.receivedData = data;
    });
    }
  }


