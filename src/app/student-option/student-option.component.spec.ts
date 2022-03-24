import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOptionComponent } from './student-option.component';

describe('StudentOptionComponent', () => {
  let component: StudentOptionComponent;
  let fixture: ComponentFixture<StudentOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
