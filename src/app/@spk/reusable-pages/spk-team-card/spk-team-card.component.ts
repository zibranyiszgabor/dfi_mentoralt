import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-team-card',
  imports: [],
  templateUrl: './spk-team-card.component.html',
  styleUrl: './spk-team-card.component.scss'
})
export class SpkTeamCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() projects: number = 0;
  @Input() position: string = '';
}
