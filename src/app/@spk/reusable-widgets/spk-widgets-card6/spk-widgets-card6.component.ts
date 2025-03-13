import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-widgets-card6',
  imports: [],
  templateUrl: './spk-widgets-card6.component.html',
  styleUrl: './spk-widgets-card6.component.scss'
})
export class SpkWidgetsCard6Component {
  @Input() count: string = '';
  @Input() label: string = '';
  @Input() linkText: string = 'View All';
  @Input() iconClass: string = '';
  @Input() avatarClass: string = '';
  @Input() linkHref: string = 'javascript:void(0);';
}
