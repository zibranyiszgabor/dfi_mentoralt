import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { Options } from '@angular-slider/ngx-slider';
import * as prismCodeData from '../../../../shared/prismData/range-slider';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import noUiSlider from 'nouislider';
interface SimpleSliderModel {
  value5: number;
  options6: Options;
}
@Component({
  selector: 'app-range-slider',
  standalone: true,
  imports: [SharedModule, NgxSliderModule,NouisliderModule,FormsModule,ReactiveFormsModule,ShowcodeCardComponent],
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.scss'
})
export class RangeSliderComponent {
  prismCode = prismCodeData;
 
  public someRange1: number[] = [3, 7];
  public someRange2: number[] = [4];
  public someRange3: number[] = [3];
  public someRange4: number[] = [4, 8];
  public someRange5: number[] = [4, 8];
  public someRange6: number[] = [4, 7];

  red = 0;
  green = 0;
  blue = 0;

  getColor(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  sliderModel: number[] = [127, 127, 127];
  updateColor() {
    const color = `rgb(${this.sliderModel[0]}, ${this.sliderModel[1]}, ${this.sliderModel[2]})`;
    // You can update the resultElement in the way you want (e.g., using Angular Renderer2).
  }

  minValue2: number = 50;
  maxValue2: number = 90;
  options5: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
        return 'red';
      }
      if (value <= 6) {
        return 'orange';
      }
      if (value <= 9) {
        return 'yellow';
      }
      return '#2AE02A';
    },
  };


  //locking 
  lockedState = false;
  lockedSlider = false;
  lockedValues = [60, 80];

  @ViewChild('slider6') slider6!: ElementRef;
  @ViewChild('slider7') slider7!: ElementRef;
  @ViewChild('lockButton') lockButton!: ElementRef;
  @ViewChild('slider6Value') slider6Value!: ElementRef;
  @ViewChild('slider7Value') slider7Value!: ElementRef;

  ngAfterViewInit(): void {
    this.initializeSliders();
  }

  initializeSliders(): void {
    const sliderOptions = {
      start: [60],
      animate: false,
      range: {
        min: 50,
        max: 100
      }
    };
    noUiSlider.create(this.slider6.nativeElement, sliderOptions);
    noUiSlider.create(this.slider7.nativeElement, { ...sliderOptions, start: [80] });

    this.slider6.nativeElement.noUiSlider.on('update', (values: string[], handle: number) => {
      this.slider6Value.nativeElement.innerHTML = values[handle];
    });

    this.slider7.nativeElement.noUiSlider.on('update', (values: string[], handle: number) => {
      this.slider7Value.nativeElement.innerHTML = values[handle];
    });

    if (this.lockButton) {
      this.lockButton.nativeElement.addEventListener('click', () => {
        this.lockedState = !this.lockedState;
        this.lockButton.nativeElement.textContent = this.lockedState ? 'unlock' : 'lock';
      });
    }

    this.slider6.nativeElement.noUiSlider.on('update', () => this.setLockedValues());
    this.slider7.nativeElement.noUiSlider.on('update', () => this.setLockedValues());

    this.slider6.nativeElement.noUiSlider.on('slide', (values: string[], handle: number) => {
      this.crossUpdate(Number(values[handle]), this.slider7.nativeElement);
    });

    this.slider7.nativeElement.noUiSlider.on('slide', (values: string[], handle: number) => {
      this.crossUpdate(Number(values[handle]), this.slider6.nativeElement);
    });
  }

  setLockedValues(): void {
    this.lockedValues = [
      Number(this.slider6.nativeElement.noUiSlider.get()),
      Number(this.slider7.nativeElement.noUiSlider.get())
    ];
  }
  
  crossUpdate(value: number, slider: any): void {
    // If the sliders aren't interlocked, don't cross-update.
    if (!this.lockedState) {
      return;
    }

    // Select whether to increase or decrease the other slider value.
    const a: number = this.slider6 === slider ? 0 : 1;

    // Invert a
    const b: number = a ? 0 : 1;

    // Offset the slider value.
    value -= this.lockedValues[b] - this.lockedValues[a];

    // Set the value
    slider.noUiSlider.set(value);
  }

  minValue3 = 20;
  maxValue3 = 60;
  options3: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f43f5e',
      to: '#f43f5e',
    },
  };

  onChange(value: any) {
  
  }

  value4: number = 12;
  options4: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
        return 'red';
      }
      if (value <= 6) {
        return 'orange';
      }
      if (value <= 9) {
        return 'yellow';
      }
      return '#2AE02A';
    },
  };

  Slider1: SimpleSliderModel = {
    value5: 5,
    options6: {
      floor: 0,
      ceil: 5,
      vertical: true,
    }
  };
  public someKeyboard: number[] = [3];
  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,
    step: 0.1,
    pageSteps: 10, // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
  };

  public someKeyboard2: number[] = [1, 3];
  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    step: 0.1,
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
    keyboard: true,
  };
  public keyupLabelOn: boolean = false;
  public keydownLabelOn: boolean = false;
  blinkKeyupLabel() {
    this.keyupLabelOn = true;
    setTimeout(() => {
      this.keyupLabelOn = false;
    }, 450);
  }
  blinkKeydownLabel() {
    this.keydownLabelOn = true;
    setTimeout(() => {
      this.keydownLabelOn = false;
    }, 450);
  }

  minValue7 = 15;
  options7: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: 'var(--primary-color)',
      to: 'var(--primary-color)',
    },
  };
  minValue8 = 20;
  options8: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f72d66',
      to: '#f72d66',
    },
  };
  minValue9 = 25;
  options9: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#eab308',
      to: '#eab308',
    },
  };
  minValue10 = 15;
  options10: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#4c75cf',
      to: '#4c75cf',
    },
  };
  minValue11 = 15;
  options11: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#22c55e',
      to: '#22c55e',
    },
  };
  minValue12 = 15;
  options12: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#ff5b51',
      to: '#ff5b51',
    },
  };
}