import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-landing-mission-card',
  imports: [],
  templateUrl: './spk-landing-mission-card.component.html',
  styleUrl: './spk-landing-mission-card.component.scss'
})
export class SpkLandingMissionCardComponent {
  @Input() iconClass!: string;
  @Input() title!: string;
  @Input() description!: string;
}
