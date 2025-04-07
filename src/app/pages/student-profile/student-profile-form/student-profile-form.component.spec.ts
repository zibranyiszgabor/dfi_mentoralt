import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileFormComponent } from './student-profile-form.component';

describe('StudentProfileFormComponent', () => {
  let component: StudentProfileFormComponent;
  let fixture: ComponentFixture<StudentProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfileFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
