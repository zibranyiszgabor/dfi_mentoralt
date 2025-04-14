import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLicencesComponent } from './student-licences.component';

describe('StudentLicencesComponent', () => {
  let component: StudentLicencesComponent;
  let fixture: ComponentFixture<StudentLicencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLicencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLicencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
