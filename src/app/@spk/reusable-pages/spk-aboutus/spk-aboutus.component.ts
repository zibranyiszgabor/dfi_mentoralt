import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-aboutus',
  imports: [CommonModule],
  templateUrl: './spk-aboutus.component.html',
  styleUrl: './spk-aboutus.component.scss'
})
export class SpkAboutusComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() role!: string;
  @Input() description!: string;
  @Input() socialLinks!: { platform: string; url: string; iconClass: string; bgClass: string }[];
}
