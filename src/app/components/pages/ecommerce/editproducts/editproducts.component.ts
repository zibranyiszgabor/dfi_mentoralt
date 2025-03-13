import { NgSelectModule } from '@ng-select/ng-select';
import { Component,OnInit,ViewChild } from '@angular/core';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import { FormsModule,FormGroup ,FormControl, ReactiveFormsModule} from '@angular/forms';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FilePondModule } from 'ngx-filepond';
import { FilePondComponent } from 'ngx-filepond';
import { FilePondOptions } from 'filepond';
import jsonDoc from '../../../../shared/data/editor';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { SpkFlatpickrComponent } from '../../../../@spk/reusable-apps/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-editproducts',
  standalone: true,
  imports: [SharedModule,NgxEditorModule,FilePondModule,FormsModule,SpkFlatpickrComponent,
    FlatpickrModule,ReactiveFormsModule,NgSelectModule,AngularEditorModule,SpkNgSelectComponent],
  templateUrl: './editproducts.component.html',
  providers:[ FlatpickrDefaults],
  styleUrl: './editproducts.component.scss'
})
export class EditproductsComponent implements OnInit{
  selectedTags=['Relaxed','Plain']
  selectedColors=['Blue']
  constructor() {
    // Initialize with a default value if needed
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
   
    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#publish-date', this.flatpickrOptions);
}
editor!: Editor;
toolbar: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['link', 'image'],
];

form = new FormGroup({
  editorContent: new FormControl(
    { value: jsonDoc, disabled: false },
    Validators.required()
  ),
});

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  flatpickrOptions: any = {
    inline: true,
  };

  @ViewChild('.product-Images') myPond!: EditproductsComponent
  @ViewChild('.product-documents') image!: EditproductsComponent
  pondOptions: FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop files here...'   
  }

  pondFiles: FilePondOptions["files"] = [
   
  ]

  pondHandleInit() {
  }
  pondHandleInit1() {
  }
  pondHandleAddFile(event: any) {
  }

  pondHandleActivateFile(event: any) {
  }
 // Angular Editor
 htmlContent = '';

 config: AngularEditorConfig = {
   editable: true,
   spellcheck: true,
   height: '15rem',
   minHeight: '5rem',
   placeholder: 'Enter text here...',
   translate: 'no',
   defaultParagraphSeparator: 'p',
   defaultFontName: 'Arial',

   customClasses: [
     {
       name: "quote",
       class: "quote",
     },
     {
       name: 'redText',
       class: 'redText'
     },
     {
       name: "titleText",
       class: "titleText",
       tag: "h1",
     },
   ]
 };
 Categories=[
  {label:'Clothing',value:1},
  {label:'Footwear',value:2},
  {label:'Accesories',value:3},
  {label:'Grooming',value:4},
  {label:'Watches',value:5},
  {label:'Ethnic & Festive',value:6},
  {label:'Jewellery',value:7},
  {label:'Toys & Babycare',value:8},
  {label:'Festive Gifts',value:9},
  {label:'Kitchen',value:10},
  {label:'Dining',value:11},
  {label:'Home Decors',value:12},
  {label:'Stationery',value:13},
 ]
 Gender=[
  {label:'All',value:1},
  {label:'Male',value:2},
  {label:'Female',value:3},
  {label:'Others',value:4},
 ]
 Size=[
  {label:'Extra Small',value:1},
  {label:'Small',value:2},
  {label:'Medium',value:3},
  {label:'Large',value:4},
  {label:'Extra Large',value:5},
 ]
 Brand=[
  {label:'Armani',value:1},
  {label:'Lacoste',value:2},
  {label:'Puma',value:3},
  {label:'Spykar',value:4},
  {label:'Mufti',value:5},
  {label:'Home Town',value:4},
  {label:'Arrabi',value:5},
 ]
 selectedColor=[7]
 Color= [
  {label:'White',value:1},
  {label:'Black',value:2},
  {label:'Red',value:3},
  {label:'Orange',value:4},
  {label:'Yellow',value:5},
  {label:'Green',value:6},
  {label:'Blue',value:7},
  {label:'Pink',value:8},
  {label:'Purple',value:9},
 ];
 published=[
  {label:'Select',value:1},
  {label:'Published',value:2},
  {label:'Scheduled',value:3},
 ]
 Tags=[
  {label:"Relaxed",value:1},
  {label:"Solid",value:2},
  {label:"Washed",value:3},
  {label:"Plain",value:4},

]
Tags1=[4,1]
Availability=[
  {label:"In Stock",value:1},
  {label:"Out Of Stock",value:2},

]
}
