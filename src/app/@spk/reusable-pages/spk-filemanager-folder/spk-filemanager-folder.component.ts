import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-filemanager-folder',
  imports: [CommonModule,RouterModule,NgbDropdownModule],
  templateUrl: './spk-filemanager-folder.component.html',
  styleUrl: './spk-filemanager-folder.component.scss'
})
export class SpkFilemanagerFolderComponent {
  @Input() fileData!: { name: string; fileCount: string; size: string; colorClass: string;fileBgClass: string; svgColor: string;  svgPath: string };
}

