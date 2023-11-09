import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarousselComponent } from './popular-caroussel.component';

describe('CarousselComponent', () => {
  let component: PopularCarousselComponent;
  let fixture: ComponentFixture<PopularCarousselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCarousselComponent]
    });
    fixture = TestBed.createComponent(PopularCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
