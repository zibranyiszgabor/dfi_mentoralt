import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-pricing1',
  imports: [CommonModule],
  templateUrl: './spk-pricing1.component.html',
  styleUrl: './spk-pricing1.component.scss'
})
export class SpkPricing1Component {
  @Input() planName!: string;
  @Input() badgeText!: string;
  @Input() badgeClass!: string;
  @Input() bgClass!: string;
  @Input() price!: string;
  @Input() billingCycle!: string;
  @Input() billingCycle1!: string;
  @Input() description!: string;
  @Input() features!: { text: string; isAvailable: boolean }[];
  @Input() buttonClass!: string;
  @Input() buttonText!: string;
  @Input() highlightClass!: string;
}
