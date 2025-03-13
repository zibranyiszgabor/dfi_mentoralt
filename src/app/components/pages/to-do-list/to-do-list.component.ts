import { Component } from '@angular/core';
import { NgbDropdownModule,NgbNavModule,NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../@spk/reusable-apps/spk-flatpickr/spk-flatpickr.component';
import { SpkTodolistCardComponent } from '../../../@spk/reusable-pages/spk-todolist-card/spk-todolist-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [SharedModule,SpkNgSelectComponent,SpkFlatpickrComponent,NgbNavModule,SpkTodolistCardComponent,SpkDropdownsComponent],
  providers: [NgbModalConfig, NgbModal],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
constructor(private modalService: NgbModal,){

}

  open(content:any) {
		this.modalService.open(content,{ centered: true });
	}
  Status=[
    {label:'In progress',value:1},
    {label:'Not Started',value:2},
    {label:'Completed',value:3},
    {label:'Pending',value:4},
  ]
  Priority=[
    {label:'Critical',value:1},
    {label:'High',value:2},
    {label:'Medium',value:3},
    {label:'Low',value:4},
  
  ]
  tags=[
    {value:1,label:'Angelina May'},
    {value:2,label:'Kiara advain'},
    {value:3,label:'Hercules Jhon'},
    {value:4,label:'Mayor Kim'},
  ]
  selectedChoices = [1];

  Alltasks = [
    {
      id: 1,
      title: 'Home Page Design',
      status: 'Inprogress',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 2,
      title: 'Testing',
      status: 'Pending',
      priority: 'Low',
      assignedTo: [
        './assets/images/faces/3.jpg',
        './assets/images/faces/4.jpg',
        './assets/images/faces/6.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 3,
      title: 'Creating Home Page Website',
      status: 'Completed',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/1.jpg',
        './assets/images/faces/6.jpg',
        './assets/images/faces/6.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 4,
      title: 'Fix Header Issue',
      status: 'Inprogress',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/7.jpg',
        './assets/images/faces/6.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 5,
      title: 'Design Horizontal Layout',
      status: 'Completed',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/3.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/1.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 6,
      title: 'Creating Blog Post',
      status: 'pending',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/1.jpg',
        './assets/images/faces/2.jpg',
        './assets/images/faces/6.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 7,
      title: 'Design Horizontal Layout',
      status: 'Completed',
      priority: 'Low',
      assignedTo: [
        './assets/images/faces/4.jpg',
        './assets/images/faces/5.jpg',
        './assets/images/faces/4.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 8,
      title: 'Fix Data Table Issue',
      status: 'Pending',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/6.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/3.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 9,
      title: 'Data Table Design',
      status: 'inprogress',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/6.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
  ];
  Pendingtask = [
    {
      id: 1,
      title: 'Testing',
      status: 'Pending',
      priority: 'Low',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 2,
      title: 'Testing',
      status: 'Pending',
      priority: 'Low',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 3,
      title: 'Testing',
      status: 'Pending',
      priority: 'Low',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
  ];
  Inprogresstask = [
    {
      id: 1,
      title: 'Home Page Design',
      status: 'Inprogress',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 2,
      title: 'Fix Header issue',
      status: 'Inprogress',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 3,
      title: 'Data table Design',
      status: 'Inprogress',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 4,
      title: 'Fix the Data Table Issue',
      status: 'Inprogress',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
     {
      id: 5,
      title: 'Design Authentication pages',
      status: 'Inprogress',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
  ];
  Completedtask = [
    {
      id: 1,
      title: 'Home Page Design',
      status: 'Completed',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 2,
      title: 'Fix Header issue',
      status: 'Completed',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 3,
      title: 'Data table Design',
      status: 'Completed',
      priority: 'High',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 4,
      title: 'Fix the Data Table Issue',
      status: 'Completed',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
    {
      id: 5,
      title: 'Fix the Data Table Issue',
      status: 'Completed',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
     {
      id: 6,
      title: 'Design Authentication pages',
      status: 'Completed',
      priority: 'Medium',
      assignedTo: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/5.jpg',
      ],
      editAssignee: '',
    },
  ];
  
}