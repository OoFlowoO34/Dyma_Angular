import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisContainerComponent } from './favoris-container.component';

describe('FavorisContainerComponent', () => {
  let component: FavorisContainerComponent;
  let fixture: ComponentFixture<FavorisContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorisContainerComponent]
    });
    fixture = TestBed.createComponent(FavorisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
