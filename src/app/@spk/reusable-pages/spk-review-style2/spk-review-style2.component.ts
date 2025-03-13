import { Component, Input } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-review-style2',
  imports: [NgbTooltipModule],
  templateUrl: './spk-review-style2.component.html',
  styleUrl: './spk-review-style2.component.scss'
})
export class SpkReviewStyle2Component {
[x: string]: any;
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() review: string = '';
  @Input() timeAgo: string = '';
  @Input() reviewerName: string = '';
}
