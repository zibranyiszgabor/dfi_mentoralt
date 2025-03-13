import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-review-style1',
  imports: [],
  templateUrl: './spk-review-style1.component.html',
  styleUrl: './spk-review-style1.component.scss'
})
export class SpkReviewStyle1Component {
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() rating: number = 0; // Pass the number of stars
  @Input() timeAgo: string = '';
  @Input() review: string = '';
  @Input() likes: number = 0;
  @Input() dislikes: number = 0;
}
