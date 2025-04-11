import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostRequestComponent } from './job-post-request.component';

describe('JobPostRequestComponent', () => {
  let component: JobPostRequestComponent;
  let fixture: ComponentFixture<JobPostRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
