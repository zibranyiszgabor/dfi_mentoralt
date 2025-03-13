import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpkDropdownsComponent } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-file-details-card',
  imports: [SpkDropdownsComponent],
  templateUrl: './spk-file-details-card.component.html',
  styleUrl: './spk-file-details-card.component.scss'
})
export class SpkFileDetailsCardComponent {
  @Input() folder!: { image: string; name: string; fileCount: number; size: string };

  @Output() onDelete = new EventEmitter<void>();
  @Output() onRename = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  deleteFolder() {
    this.onDelete.emit();
  }

  renameFolder() {
    this.onRename.emit();
  }

  hideFolder() {
    this.onHide.emit();
  }
}
