import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselholderComponent } from './carouselholder.component';

describe('CarouselholderComponent', () => {
  let component: CarouselholderComponent;
  let fixture: ComponentFixture<CarouselholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselholderComponent]
    });
    fixture = TestBed.createComponent(CarouselholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
