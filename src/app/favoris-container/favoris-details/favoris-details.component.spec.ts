import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisDetailsComponent } from './favoris-details.component';

describe('FavorisDetailsComponent', () => {
  let component: FavorisDetailsComponent;
  let fixture: ComponentFixture<FavorisDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorisDetailsComponent]
    });
    fixture = TestBed.createComponent(FavorisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
