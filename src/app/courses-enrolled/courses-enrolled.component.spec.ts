import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEnrolledComponent } from './courses-enrolled.component';

describe('CoursesEnrolledComponent', () => {
  let component: CoursesEnrolledComponent;
  let fixture: ComponentFixture<CoursesEnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesEnrolledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
