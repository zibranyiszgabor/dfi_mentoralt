import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/buttongroup';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,NgbDropdownModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent {
  prsimCodeData: any = PrismCode;
  basicButtons=[
  {class:'btn-info btn-wave',icon:'bi bi-skip-backward'},
  {class:'btn-info btn-wave',icon:'bi bi-pause'},
  {class:'btn-info btn-wave',icon:'bi bi-skip-forward'}
  ]
}


