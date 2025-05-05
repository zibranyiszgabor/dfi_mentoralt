import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStudyComponent } from './student-study.component';

describe('StudentStudyComponent', () => {
  let component: StudentStudyComponent;
  let fixture: ComponentFixture<StudentStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
