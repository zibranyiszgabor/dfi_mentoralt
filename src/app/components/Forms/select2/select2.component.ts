import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select2',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,SpkNgSelectComponent,NgbModule],
  templateUrl: './select2.component.html',
  styleUrl: './select2.component.scss'
})
export class Select2Component {
  isCollapsed:boolean=false;
  Selection = [
    { value: 1, label: 'Selection-1' },
    { value: 2, label: 'Selection-2' },
    { value: 3, label: 'Selection-3' },
    { value: 3, label: 'Selection-4' },
    { value: 3, label: 'Selection-5' }
];
singleSelection = [
  { value: 1, label: 'Texas' },
  { value: 2, label: 'Georgia' },
  { value: 3, label: 'California' },
  { value: 3, label: 'Washington D.C' },
  { value: 3, label: 'Virginia' }
];
multipleSelection = [
{ value: 1, label: 'Appple' },
{ value: 2, label: 'Mango' },
{ value: 3, label: 'Orange' },
{ value: 3, label: 'Guava' },
{ value: 3, label: 'Pineapple' }
];
multipleSelect=[
  {label:"Multiple-1",value:1},
  {label:"Multiple-2",value:2},
  {label:"Multiple-3",value:3},
  {label:"Multiple-4",value:4},
  {label:"Multiple-5",value:5},
]
selectedMulti=[1]

selectedPersonId:any=[1]
  selectedPerson:any=['Selection-1']
  
  disable:any;

  onCitySelected(selected: any) {
    this.selectedCity = selected;
    // You can perform additional actions based on the selected city here
  }
  enableSelect(): void {
    this.disable = false;
  }
  
  disableSelect(): void {
    this.disable = true;
  }

    //Templating
    cities1 = [
      {
        id: 1,
        name: 'Andrew',
        avatar: './assets/images/faces/select2/p-1.jpg',
      },
      {
        id: 2,
        name: 'Maya',
        avatar: './assets/images/faces/select2/p-2.jpg',
      },
      {
        id: 3,
        name: 'Brodus Axel',
        avatar: './assets/images/faces/select2/p-3.jpg',
      },
      {
        id: 4,
        name: 'Goldens',
        avatar: './assets/images/faces/select2/p-4.jpg',
      },
      {
        id: 5,
        name: 'Angelina',
        avatar: './assets/images/faces/select2/p-5.jpg',
      },
    ];
  selecetedTags: any[] = [];
  selectedCity = this.cities1[0].name;
  
  //Templating Selectiones
  cities2 = [
    {
      id: 1,
      name: 'Andrew',
      avatar: './assets/images/faces/select2/p-1.jpg',
    },
    {
      id: 2,
      name: 'Maya',
      avatar: './assets/images/faces/select2/p-2.jpg',
    },
    {
      id: 3,
      name: 'Brodus Axel',
      avatar: './assets/images/faces/select2/p-3.jpg',
    },
    {
      id: 4,
      name: 'Goldens',
      avatar: './assets/images/faces/select2/p-4.jpg',
    },
    {
      id: 5,
      name: 'Angelina',
      avatar: './assets/images/faces/select2/p-5.jpg',
    },
  ];
  selectedCity1 = this.cities2[0].name;

}
