import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-landing-team-card',
  imports: [RouterModule],
  templateUrl: './spk-landing-team-card.component.html',
  styleUrl: './spk-landing-team-card.component.scss'
})
export class SpkLandingTeamCardComponent {
  @Input() member!: {
    name: string;
    role: string;
    image: string;
    description: string;
  };
}
