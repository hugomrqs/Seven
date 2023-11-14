import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api/api.service';
import { NavigationEnd, Router } from '@angular/router';
import { SearchTitleService } from 'src/app/Services/search-title/search-title.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  query: string = ''; 

  constructor(private api: ApiService, private router: Router, private searchTitleService: SearchTitleService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Si l'URL ne contient pas '/search', vide la barre de recherche
        if (!event.url.includes('/search')) { 
          this.query = '';
        }
      }
    });
  }

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

  onInfoClicked(): void {
    //router vers la page de features --> features-page component
    this.router.navigateByUrl("features");
  }
}