import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './spk-profile.component.html',
  styleUrl: './spk-profile.component.scss'
})
export class SpkProfileComponent {
  @Input() title: string = '';
  @Input() status: string = '';
  @Input() statusClass: string = ''; // For dynamic badge color
  @Input() assignedTo: string[] = []; // Array of image URLs
  @Input() modalId: string = '';
  @Input() addClass: string = '';
  constructor(private modalService: NgbModal){

  }
  
  open(content:any) {
		this.modalService.open(content,{ centered: true });
	}
}
