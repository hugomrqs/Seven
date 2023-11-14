import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmClickedComponent } from './film-clicked.component';

describe('FilmClickedComponent', () => {
  let component: FilmClickedComponent;
  let fixture: ComponentFixture<FilmClickedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmClickedComponent]
    });
    fixture = TestBed.createComponent(FilmClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
