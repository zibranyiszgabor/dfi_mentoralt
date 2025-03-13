import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import jsonDoc from '../../../../shared/data/editor';
import { SpkNgSelectComponent } from '../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mail-inbox',
  imports: [SharedModule,SpkNgSelectComponent,NgxEditorModule,FormsModule,ReactiveFormsModule,OverlayscrollbarsModule,SpkDropdownsComponent,NgbTooltipModule,RouterModule],
  templateUrl: './mail-inbox.component.html',
  styleUrl: './mail-inbox.component.scss'
})
export class MailInboxComponent {
  constructor(private modalService: NgbModal) {
   
  }
  open(content: any) {
    this.modalService.open(content,{ size: 'lg' });
  }
 
  ngOnInit(): void {
    this.editor = new Editor();
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

  Mails=[
    {label:"jay@gmail.com",value:1},
    {label:"kia@gmail.com",value:2},
    {label:"don@gmail.com",value:3},
    {label:"kimo@gmail.com",value:4},
  ]
  selectedTags=[1]
 
  recipients = [
    { name: 'Hadley Kylin', status: 'online', avatar: './assets/images/faces/11.jpg' },
    { name: 'Iliana Lilly', status: 'online', avatar: './assets/images/faces/7.jpg' },
    { name: 'Jasmine Della', status: 'offline', avatar: './assets/images/faces/4.jpg' },
    { name: 'Emanuel Rush', status: 'online', avatar: './assets/images/faces/8.jpg' },
    { name: 'Nyra Tiyana', status: 'offline', avatar: './assets/images/faces/3.jpg' },
    { name: 'Maria Violet', status: 'offline', avatar: './assets/images/faces/11.jpg' },
    { name: 'Priceton Gray', status: 'online', avatar: './assets/images/faces/16.jpg' },
    { name: 'Charlie Edson', status: 'offline', avatar: './assets/images/faces/10.jpg' },
    { name: 'Spencer Robin', status: 'offline', avatar: './assets/images/faces/15.jpg' }
  ];

  allMails = [
    {
      subject: 'New Project details',
      isStarred: false,
      isImportant: true,
      badge: { text: 'mail', class: 'bg-danger' },
      content:
        ' 😍Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor👍 cum socia eget dolor gula eget dolor ',
      time: '1:32PM',
      hasAttachment: true
    },
    {
      subject: 'Most Probable date of project completion',
      isStarred: false,
      isImportant: false,
      badge: null,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '2:15PM',
      hasAttachment: false
    },
    {
      subject: 'Personal Mail',
      isStarred: false,
      isImportant: true,
      badge: null,
      content:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo 😊😍li gula eget dolor cum socia eget dolor gula eget dolor ',
      time: '4:20PM',
      hasAttachment: true
    },
    {
      subject: 'Applying for bank loan?',
      isStarred: false,
      isImportant: true,
      badge: { text: 'Friends', class: 'bg-success' },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '6:45PM',
      hasAttachment: true
    },
    {
      subject: ' 😊History of planets are discovered yesterday.....',
      isStarred: false,
      isImportant: false,
      badge: null,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '8:10AM',
      hasAttachment: false
    },
    {
      subject: 'Life Insurance Corporation',
      isStarred: false,
      isImportant: false,
      badge: { text: 'mail', class: 'bg-info' },
      content:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum 🤚semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor ',
      time: '3:15PM',
      hasAttachment: true
    },
    {
      subject: 'New Project details',
      isStarred: false,
      isImportant: false,
      badge: { text: 'Home', class: 'bg-primary' },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '11:40AM',
      hasAttachment: true
    },
    {
      subject: 'Life Insurance Corporation',
      isStarred: false,
      isImportant: true,
      badge: { text: 'mail', class: 'bg-danger' },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo 😍li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '5:30PM',
      hasAttachment: true
    },
    {
      subject: 'Applying for Travel Insurance',
      isStarred: false,
      isImportant: false,
      badge: { text: 'Travel', class: 'bg-warning' },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '9:50AM',
      hasAttachment: false
    },
    {
      subject: 'Project Documentation Attached',
      isStarred: false,
      isImportant: false,
      badge: { text: 'Work', class: 'bg-secondary' },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit -🎉🎂 viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '7:00PM',
      hasAttachment: true
    },
    {
      subject: 'Upcoming Meeting Details',
      isStarred: false,
      isImportant: true,
      badge: null,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '12:30PM',
      hasAttachment: false
    },
    {
      subject: 'Family Reunion Planning',
      isStarred: false,
      isImportant: false,
      badge: { text: 'Family', class: 'bg-teal' },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit - viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor gula eget dolor',
      time: '6:10AM',
      hasAttachment: false
    }
  ];
  
}