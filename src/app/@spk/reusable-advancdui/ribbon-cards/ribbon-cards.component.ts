import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-ribbon-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ribbon-cards.component.html',
  styleUrl: './ribbon-cards.component.scss'
})
export class RibbonCardsComponent {
  @Input() mainClass: string = '';
  @Input() bodyClass: string = ''; 
  @Input() ribbonClass: string = ''; 
  @Input() ribbonBgClass: string = ''; 
  @Input() ribbonBg: string = ''; 
  @Input() IconClass: string = ''; 
  @Input() BadgeClass: string = ''; 
  @Input() title: string = ''; 
  @Input() title1: string = ''; 
  @Input() textAlignment: string = ''; 
  @Input() topTitle: string = ''; 
  @Input() bottomTitle: string = ''; 
  @Input() description: string = ''; 
  @Input() descriptionClass: string = ''; 
  @Input() icon: boolean = false;
  @Input() ribbon6: boolean = false;
  @Input() bagde: boolean = false;


}
