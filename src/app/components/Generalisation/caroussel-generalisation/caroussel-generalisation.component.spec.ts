import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselGeneralisationComponent } from './caroussel-generalisation.component';

describe('CarousselGeneralisationComponent', () => {
  let component: CarousselGeneralisationComponent
;
  let fixture: ComponentFixture<CarousselGeneralisationComponent
>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarousselGeneralisationComponent
    ]
    });
    fixture = TestBed.createComponent(CarousselGeneralisationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
