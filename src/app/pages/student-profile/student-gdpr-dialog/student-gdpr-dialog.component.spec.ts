import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGdprDialogComponent } from './student-gdpr-dialog.component';

describe('StudentGdprDialogComponent', () => {
  let component: StudentGdprDialogComponent;
  let fixture: ComponentFixture<StudentGdprDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGdprDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGdprDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
