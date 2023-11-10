import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caroussel-generalisation',
  templateUrl: './caroussel-generalisation.component.html',
  styleUrls: ['./caroussel-generalisation.component.scss']
})
export class CarousselGeneralisationComponent {
  @Input() productClass: string = 'product-home';
  @Input() containerClass: string = 'container-fluid-home';
}
