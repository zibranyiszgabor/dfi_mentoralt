import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPreviousStudiesComponent } from './student-previous-studies.component';

describe('StudentPreviousStudiesComponent', () => {
  let component: StudentPreviousStudiesComponent;
  let fixture: ComponentFixture<StudentPreviousStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPreviousStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPreviousStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
