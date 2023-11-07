import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedComponent } from './rated.component';

describe('RatedComponent', () => {
  let component: RatedComponent;
  let fixture: ComponentFixture<RatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatedComponent]
    });
    fixture = TestBed.createComponent(RatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
