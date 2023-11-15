import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  constructor(private router: Router) {}

  public scrollToTop(section : string): void {
    //si je clique sur une section dans laquelle je suis déjà, scroll lent
    if (section === this.router.url.split('/').pop()) {
      window.scroll({
        top: 0, // vers le haut de la page
        behavior: 'smooth', // Rendez-le fluide
      });
    //sinon je suis instantanément ramnener en haut
    } else {
      window.scroll({
        top: 0, 
      });
    }
  }
  
}
