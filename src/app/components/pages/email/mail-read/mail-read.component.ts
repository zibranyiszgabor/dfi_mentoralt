import { Component, Renderer2 } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModalConfig, NgbModal, NgbOffcanvas, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkNgSelectComponent } from '../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import jsonDoc from '../../../../shared/data/editor';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mail-read',
  imports: [SharedModule,SpkNgSelectComponent,NgxEditorModule,FormsModule,ReactiveFormsModule,OverlayscrollbarsModule,NgbModule,SpkDropdownsComponent,RouterModule],
  templateUrl: './mail-read.component.html',
  styleUrl: './mail-read.component.scss'
}) 
export class MailReadComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal,private offcanvasService:NgbOffcanvas,private renderer: Renderer2) {
   
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

  mails = [
    { name: 'All Mails', icon: 'ti ti-mail', badge: '2,142', badgeClass: 'bg-primary1' },
    { name: 'Inbox', icon: 'ti ti-inbox', badge: '12', badgeClass: 'bg-primary2' },
    { name: 'Sent', icon: 'ti ti-send' },
    { name: 'Drafts', icon: 'ti ti-notes' },
    { name: 'Spam', icon: 'ti ti-alert-circle', badge: '6', badgeClass: 'bg-primary3' },
    { name: 'Archive', icon: 'ti ti-archive' },
    { name: 'Important', icon: 'ti ti-bookmark' },
    { name: 'Trash', icon: 'ti ti-trash' },
    { name: 'Starred', icon: 'ti ti-star', badge: '05', badgeClass: 'bg-warning' },
  ];
}
