import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkTeamCardComponent } from '../../../@spk/reusable-pages/spk-team-card/spk-team-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SharedModule,SpkTeamCardComponent,SpkDropdownsComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  cards = [
    {
      imageUrl: './assets/images/faces/11.jpg',
      name: 'Alexander Smith',
      email: 'alexandersmith2135@gmail.com',
      projects: 100,
      position: 'Associate'
    },
    {
      imageUrl: './assets/images/faces/2.jpg',
      name: 'Alicia Sierra',
      email: 'aliciasierra1645@gmail.com',
      projects: 120,
      position: 'Team Lead'
    },
    {
      imageUrl: './assets/images/faces/3.jpg',
      name: 'Angelica Hose',
      email: 'angelica143@gmail.com',
      projects: 220,
      position: 'Member'
    },
    {
      imageUrl: './assets/images/faces/8.jpg',
      name: 'Jhope Joseph',
      email: 'jhope.jhope@gmail.com',
      projects: 200,
      position: 'Team Lead'
    },
    {
      imageUrl: './assets/images/faces/9.jpg',
      name: 'King Martin',
      email: 'king.martin@gmail.com',
      projects: 140,
      position: 'Team Lead'
    },
    {
      imageUrl: './assets/images/faces/12.jpg',
      name: 'Susan Sane',
      email: 'susan.sane532@gmail.com',
      projects: 160,
      position: 'Developer'
    },
    {
      imageUrl: './assets/images/faces/1.jpg',
      name: 'Brenda Hops',
      email: 'brenda432@gmail.com',
      projects: 110,
      position: 'Member'
    },
    {
      imageUrl: './assets/images/faces/4.jpg',
      name: 'Paul Rudd',
      email: 'paulrude765@gmail.com',
      projects: 110,
      position: 'Member'
    }
  ];
  
}
