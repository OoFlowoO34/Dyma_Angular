import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisListComponent } from './favoris-list.component';

describe('FavorisListComponent', () => {
  let component: FavorisListComponent;
  let fixture: ComponentFixture<FavorisListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorisListComponent]
    });
    fixture = TestBed.createComponent(FavorisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
