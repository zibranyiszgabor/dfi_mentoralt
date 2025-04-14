import { Component, EventEmitter, Output } from '@angular/core';

declare const bootstrap: any; // Bootstrap JS szükséges

@Component({
  selector: 'app-gdpr-modal',
  templateUrl: './student-gdpr-dialog.component.html'
})
export class GdprModalComponent {
  @Output() accepted = new EventEmitter<void>();

  private modalInstance: any;

  ngAfterViewInit() {
    const modalElement = document.getElementById('gdprModal');
    this.modalInstance = new bootstrap.Modal(modalElement);
    this.modalInstance.show();
  }

  accept() {
    this.accepted.emit();
  }
}
