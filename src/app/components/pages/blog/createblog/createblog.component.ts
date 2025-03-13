import { Component,ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule,FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { FlatpickrDefaults } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SpkNgSelectComponent } from '../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../../@spk/reusable-apps/spk-flatpickr/spk-flatpickr.component';
import jsonDoc from '../../../../shared/data/editor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createblog',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,RouterModule,SpkNgSelectComponent,SpkFlatpickrComponent,CommonModule,
    NgxEditorModule,FilePondModule],
  providers: [FlatpickrDefaults],
  templateUrl: './createblog.component.html',
  styleUrl: './createblog.component.scss'
})
export class CreateblogComponent {
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
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  
  pondFiles: FilePond.FilePondOptions["files"] = [
  
  ];
  
  pondHandleInit() {
  }
  
  pondHandleAddFile(event: any) {
  }
  
  pondHandleActivateFile(event: any) {
  }
  BlogCategory=[
    {label:"Select Category",value:1},
    {label:"Nature",value:2},
    {label:"Sports",value:3},
    {label:"Food",value:4},
    {label:"Travel",value:5},
    {label:"Fashion",value:6},
    {label:"Beauty",value:7},
  ]
  Publish=[
    {label:"Top Blog",value:2},
    {label:"Blogger",value:3},
    {label:"Adventure",value:4},
    {label:"Landscape",value:5},
  ]

  selectedTags=[2,5]
  Status=[
    {label:"Select",value:2},
    {label:"Published",value:3},
    {label:"Hold",value:4},
  ]

  blogs = [
    {
      category: 'Lifestyle',
      badgeClass: 'bg-danger',
      title: 'Generator on the Internet..',
      image: './assets/images/media/photos/6.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
    {
      category: 'Business',
      badgeClass: 'bg-primary',
      title: 'Voluptatem quia voluptas...',
      image: './assets/images/media/photos/1.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
    {
      category: 'Travel',
      badgeClass: 'bg-secondary',
      title: 'Generator on the Internet..',
      image: './assets/images/media/photos/9.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
    {
      category: 'Meeting',
      badgeClass: 'bg-success',
      title: 'Voluptatem quia voluptas...',
      image: './assets/images/media/photos/7.jpg',
      description:
        'Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....',
    },
  ];
  users = [
    {
      name: 'Simon Sais',
      image: './assets/images/faces/1.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    },
    {
      name: 'Cherry Blossom',
      image: './assets/images/faces/3.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    },
    {
      name: 'Ivan Notheridiya',
      image: './assets/images/faces/5.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    },
    {
      name: 'Manny Jah',
      image: './assets/images/faces/15.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available ...'
    }
  ];
}
