import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-pricing2',
  imports: [CommonModule],
  templateUrl: './spk-pricing2.component.html',
  styleUrl: './spk-pricing2.component.scss'
})
export class SpkPricing2Component {
  @Input() title!: string;
  @Input() price!: string;
  @Input() pricePeriod!: string;
  @Input() description!: string;
  @Input() features!: { label: string; badge?: string }[];
  @Input() buttonText!: string;
  @Input() buttonClass!: string;
  @Input() svgIcon!: string; // Pass SVG as a string for dynamic rendering
  @Input() badgeText?: string;
  @Input() badgeClass?: string;
  @Input() highlightClass?: string; // For borders or custom styles
  @Input() discountBadge?: { text: string; percent: string }; 

  constructor(private sanitizer: DomSanitizer) {}
  sanitizeIcon(svgIcon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgIcon);
  }
}
