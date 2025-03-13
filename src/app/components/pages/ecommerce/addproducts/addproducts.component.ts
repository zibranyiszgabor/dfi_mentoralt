import { Component,ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilePondOptions } from 'filepond';
import { FilePondModule } from 'ngx-filepond';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/editor';
import { SpkFlatpickrComponent } from '../../../../@spk/reusable-apps/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [SharedModule, FlatpickrModule, NgSelectModule, FilePondModule, SpkFlatpickrComponent,
    FormsModule,NgxEditorModule,ReactiveFormsModule,SpkNgSelectComponent],
  templateUrl: './addproducts.component.html',
  providers:[  FlatpickrDefaults],
  styleUrl: './addproducts.component.scss'
})

export class AddproductsComponent {
  public type: string = 'component';
  public disabled: boolean = false;
//select 1
selectedSimpleItem ='select' ;
simpleItems:any= [];
//select 2
selectedSimpleItem1 ='select' ;
simpleItems1:any= [];
//select 3
selectedSimpleItem2 ='select' ;
simpleItems2:any= [];
//select 4
selectedSimpleItem3 ='select' ;
simpleItems3:any= [];
//select 5
selectedSimpleItem4 =['select'] ;
simpleItems4:any= [];
//select 6
selectedSimpleItem5 ='select' ;
simpleItems5:any= [];
//select 7
selectedSimpleItem6 ='select' ;
simpleItems6:any= [];


ngOnInit() {
  this.editor = new Editor();
  this.simpleItems= ['Small','Medium','Extra Large','Large'];
  this.simpleItems1= ['Armani','Lacoste','Arrrabi','Mufti'];
  this.simpleItems2 = ['Jewellery','Ethnic & Festive','Grooming','Accesories','Footwear','Category','Clothing',];
  this.simpleItems3= ['Male','All','Female','Others'];
  this.simpleItems4= ['White','Red','Pink','Yellow','Orange','Green'];
  this.simpleItems5= ['Publish','Scheduled'];
  this.simpleItems6= ['In Stock','Out Of Stock','Select'];
  this.flatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',

  };

  myGroup: FormGroup;

  
  flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#pretime', this.flatpickrOptions);
}

editor!: Editor;
toolbar: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['link', 'image'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
];

form = new FormGroup({
  editorContent: new FormControl(
    { value: jsonDoc, disabled: false },
    Validators.required()
  ),
});

flatpickrOptions: any = {
  inline: true,
};
@ViewChild('.product-Images') myPond!: AddproductsComponent
@ViewChild('.product-documents') image!: AddproductsComponent
pondOptions: FilePondOptions = {
  allowMultiple: true,
  labelIdle: 'Drop files here...'   
}

pondFiles: FilePondOptions["files"] = []

pondHandleInit() {
}
pondHandleInit1() {
}
pondHandleAddFile(event: any) {
}

pondHandleActivateFile(event: any) {
}
Avaliability=[
  {label:"Select",value:1},
  {label:"In Stock",value:2},
  {label:"Out Of Stock",value:3},
]


selectedTags=[1,4]
Tags=[
  {label:"Relaxed",value:1},
  {label:"Solid",value:2},
  {label:"Washed",value:3},
  {label:"Plain",value:4},

]

}
