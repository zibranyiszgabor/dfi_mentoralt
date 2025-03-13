import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-two-step-verification',
  imports: [RouterModule],
  templateUrl: './two-step-verification.component.html',
  styleUrl: './two-step-verification.component.scss'
})
export class TwoStepVerificationComponent {
 // Use @ViewChild to get references to the input elements in the template
 @ViewChild('oneInput') oneInput!: ElementRef<HTMLInputElement>;
 @ViewChild('twoInput') twoInput!: ElementRef<HTMLInputElement>;
 @ViewChild('threeInput') threeInput!: ElementRef<HTMLInputElement>;
 @ViewChild('fourInput') fourInput!: ElementRef<HTMLInputElement>;

 // Automatically move the focus to the next input field after entering a digit
 onDigitInput(event: KeyboardEvent, nextInput: HTMLInputElement | null): void {
   const inputElement = event.target as HTMLInputElement;
   if (inputElement.value.length > 0) {
     // If a digit is entered, move the focus to the next input field
     if (nextInput) {
       nextInput.focus();
     }
   }
 }
}
