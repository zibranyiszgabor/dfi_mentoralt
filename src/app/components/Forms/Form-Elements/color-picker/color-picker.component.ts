import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule} from '@angular/forms';
import { NgxColorsModule, } from 'ngx-colors';
import * as prismCodeData from '../../../../shared/prismData/color-pickers'
import { ColorPickerModule } from 'ngx-color-picker';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [SharedModule,MatIconModule,FormsModule,ColorPickerModule,NgxColorsModule,ShowcodeCardComponent],
  templateUrl: './color-picker.component.html',
  providers: [ NgbModal],
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {
  prismCode = prismCodeData; 
  public color: string = '#2889e9';
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
   
  public onEventLog(event: string, data: any): void {
  }
 
  constructor() { }
  color3:string = '#EC407A';
  input1: string = "#00897B";
  
}
