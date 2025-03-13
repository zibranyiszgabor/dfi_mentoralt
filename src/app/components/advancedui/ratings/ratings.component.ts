import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module'; 
import { CommonModule } from '@angular/common';
import { BarRatingComponent } from '../../../@spk/reusable-advancdui/bar-rating/bar-rating.component';
@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,FormsModule,ReactiveFormsModule,BarRatingComponent],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {
  starRate = 0;
  starRate1 = 0;
  starRate2 = 5;
  starRate3 = 0;
  squareRate = 3;
  faRate = 3;
  currentRate = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 2;
  selected1 = 3;
  hovered = 1;
  hovered1 = 2;
  readonly = false;
  heartRate = 3.45;
  ctrl: UntypedFormControl;
  control: any;

  ctrl1: UntypedFormControl;
  constructor(private cdr: ChangeDetectorRef) {
    this.ctrl = new UntypedFormControl(null, Validators.required);
    this.ctrl1 = new UntypedFormControl(null, Validators.required);
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  ngOnInit(): void {
  }

  toggle = () => {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  };
}
