import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-product-card',
  imports: [RouterModule],
  templateUrl: './spk-product-card.component.html',
  styleUrl: './spk-product-card.component.scss'
})
export class SpkProductCardComponent {
  @Input() productImage: string = '';
  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productPrice: any = 0;
  @Input() originalPrice: any = 0;
  @Input() discountPercentage: number = 0;
  @Input() rating: number = 0.0;
  @Input() offerPrice: any = 0;
}
