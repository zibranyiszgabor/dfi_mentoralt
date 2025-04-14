import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLanguageSkillsComponent } from './student-language-skills.component';

describe('StudentLanguageSkillsComponent', () => {
  let component: StudentLanguageSkillsComponent;
  let fixture: ComponentFixture<StudentLanguageSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLanguageSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLanguageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
