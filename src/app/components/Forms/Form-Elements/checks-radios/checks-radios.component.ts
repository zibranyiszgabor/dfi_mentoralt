import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/prismData/checks'
import { ToggleBtnDirective } from '../../../../shared/directives/toggle-btn.directive';
@Component({
  selector: 'app-checks-radios',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,CommonModule,ShowcodeCardComponent,ToggleBtnDirective],
  templateUrl: './checks-radios.component.html',
  styleUrl: './checks-radios.component.scss'
})
export class ChecksRadiosComponent {

  prismCode = prismCodeData;
}
