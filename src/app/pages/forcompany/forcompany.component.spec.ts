import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcompanyComponent } from './forcompany.component';

describe('ForcompanyComponent', () => {
  let component: ForcompanyComponent;
  let fixture: ComponentFixture<ForcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
