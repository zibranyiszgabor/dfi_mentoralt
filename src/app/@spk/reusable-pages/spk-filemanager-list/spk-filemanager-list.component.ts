import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-filemanager-list',
  imports: [RouterModule],
  templateUrl: './spk-filemanager-list.component.html',
  styleUrl: './spk-filemanager-list.component.scss'
})
export class SpkFilemanagerListComponent {
  @Input() file!: { 
    name: string; 
    size: string; 
    image: string; 
    customClass?: string; 
    fileClass?: string; 
  };
}
