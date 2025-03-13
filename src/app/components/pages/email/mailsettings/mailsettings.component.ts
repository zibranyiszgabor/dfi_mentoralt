import { Component } from '@angular/core';
import { NgbNavModule,NgbDropdownModule  } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelectComponent } from '../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
@Component({
  selector: 'app-mailsettings',
  standalone: true,
  imports: [SharedModule, NgbNavModule, FormsModule, ReactiveFormsModule, NgbDropdownModule, NgSelectModule,CommonModule,SpkNgSelectComponent,SpkDropdownsComponent],
  templateUrl: './mailsettings.component.html',
  styleUrl: './mailsettings.component.scss'
})
export class MailsettingsComponent {
 
url1: string = ''; // Assuming url1 is a property in your component

handleFileInput(event: any): void {
  const file = event.target.files[0];
  if (file) { 
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url1 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

  Pages=[
  {label:"10",value:1},
  {label:"50",value:1},
  {label:"100",value:1},
  {label:"150",value:1},
]
languages=[
  {value:1,label:'English'},
  {value:2,label:'French'},
  {value:3,label:'Arabic'},
  {value:4,label:'Hindi'},

]
Country=[
  {value:1,label:'Usa'},
  {value:2,label:'Australia'},
  {value:3,label:'Dubai'},
]
selected=[1]
Attempts=[
  {value:1,label:'3'},
  {value:2,label:'5'},
  {value:3,label:'10'},
  {value:4,label:'20'},
]
Days=[
  {value:1,label:'1 Day'},
  {value:2,label:'1 Hour'},
  {value:3,label:'1 Month'},
  {value:4,label:'1 Year'},
]

devices = [
  {
    icon: 'bi bi-phone',
    name: 'Mobile-LG-1023',
    location: 'Manchester, UK',
    date: 'Nov 30, 04:45PM',
  },
  {
    icon: 'bi bi-laptop',
    name: 'Lenovo-1291203',
    location: 'England, UK',
    date: 'Aug 12, 12:25PM',
  },
  {
    icon: 'bi bi-laptop',
    name: 'Macbook-Suzika',
    location: 'Brightoon, UK',
    date: 'Jul 18, 8:34AM',
  },
  {
    icon: 'bi bi-pc-display-horizontal',
    name: 'Apple-Desktop',
    location: 'Darlington, UK',
    date: 'Jan 14, 11:14AM',
  },
];
}
