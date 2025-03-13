import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-todolist-card',
  imports: [CommonModule,FormsModule],
  templateUrl: './spk-todolist-card.component.html',
  styleUrl: './spk-todolist-card.component.scss'
})
export class SpkTodolistCardComponent {

  constructor(private modalService: NgbModal){

  }
  
  open(content:any) {
		this.modalService.open(content,{ centered: true });
	}
  @Input() task: any;

  get taskCardClass(): string {
    return `task-${this.task.status.toLowerCase().replace(/\s+/g, '-')}-card`;
  }

  get statusBadgeClass(): string {
    switch (this.task.status.toLowerCase()) {
      case 'pending':
        return 'bg-danger';
      case 'inprogress':
        return 'bg-secondary';
      case 'completed':
        return 'bg-success';
      default:
        return 'bg-primary';
    }
  }

  get footerBadgeClass(): string {
    switch (this.task.priority.toLowerCase()) {
      case 'high':
        return 'bg-danger-transparent';
      case 'medium':
        return 'bg-success-transparent';
      case 'low':
        return 'bg-warning-transparent';
      default:
        return 'bg-secondary-transparent';
    }
  }

  get priority(): string {
    return this.task.priority.charAt(0).toUpperCase() + this.task.priority.slice(1);
  }

  get modalId(): string {
    return `editAssigneeModal${this.task.id}`;
  }
}
