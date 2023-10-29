import { Component } from '@angular/core';
import { Film } from 'src/app/modele/film.modele';
import { ApiService } from 'src/app/services/api/api.service';
import { NavigationEnd, Router } from '@angular/router';
import { SearchTitleService } from 'src/app/services/search-title/search-title.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  query: string = ''; 

  constructor(private api: ApiService, private router: Router, private searchTitleService: SearchTitleService) {}

  //déclanché au moment du submit de la search
  onSearchSubmit(): void {
    this.api.getSearchMovie(this.query).subscribe(data => {
      if (data.results) {
        this.searchTitleService.setResultFilms(data.results) ;
      }
    });
    //router vers les resultats --> search page component
    this.router.navigateByUrl("search");
  }

}