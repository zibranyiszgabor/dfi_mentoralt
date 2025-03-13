import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-pricing',
  imports: [CommonModule],
  templateUrl: './spk-pricing.component.html',
  styleUrl: './spk-pricing.component.scss'
})
export class SpkPricingComponent {
  @Input() icon!: string;
  @Input() planName!: string;
  @Input() badgeText!: string;
  @Input() badgeClass!: string;
  @Input() price!: string;
  @Input() billingCycle!: string;
  @Input() billingCycle1!: string;
  @Input() description!: string;
  @Input() features!: { text: string; isAvailable: boolean }[];
  @Input() buttonClass!: string;
  @Input() buttonText!: string;
}
