import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesContainerComponent } from './exercices-container.component';

describe('ExercicesContainerComponent', () => {
  let component: ExercicesContainerComponent;
  let fixture: ComponentFixture<ExercicesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicesContainerComponent]
    });
    fixture = TestBed.createComponent(ExercicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
