import { Component, Renderer2, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DROPZONE_CONFIG, DropzoneComponent, DropzoneConfigInterface,DropzoneDirective,DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpkFilemanagerListComponent } from '../../../../@spk/reusable-pages/spk-filemanager-list/spk-filemanager-list.component';
import { SpkFilemanagerFolderComponent } from '../../../../@spk/reusable-pages/spk-filemanager-folder/spk-filemanager-folder.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*,application/pdf,.doc,.docx,.txt',
  createImageThumbnails: true
};
@Component({
  selector: 'app-filemanager',
  standalone: true,
  imports: [SharedModule,SpkFilemanagerListComponent,SpkFilemanagerFolderComponent,SpkDropdownsComponent],
  templateUrl: './filemanager.component.html',
  styleUrl: './filemanager.component.scss'
})
export class FilemanagerComponent {

  constructor(private modalService: NgbModal) {
  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
}

fileCards = [
  {
    name: 'Videos',
    fileCount: '35 Files',
    size: '23 MB',
    colorClass: 'bg-primary-transparent border border-primary',
    svgColor:'#645acf',
    fileBgClass:'primary',
    svgPath: 'M9.3 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V14.6C20.6 13.6 18.9 13 17 13C13.5 13 10.4 15.1 9.1 18.3L8.8 19L9.1 19.7C9.2 19.8 9.2 19.9 9.3 20M23 19C22.1 21.3 19.7 23 17 23S11.9 21.3 11 19C11.9 16.7 14.3 15 17 15S22.1 16.7 23 19M19.5 19C19.5 17.6 18.4 16.5 17 16.5S14.5 17.6 14.5 19 15.6 21.5 17 21.5 19.5 20.4 19.5 19M17 18C16.4 18 16 18.4 16 19S16.4 20 17 20 18 19.6 18 19 17.6 18 17 18'
  },
  {
    name: 'PPT',
    fileCount: '25 Files',
    size: '15 MB',
    svgColor:'#e82646',
    fileBgClass:'danger',
    colorClass: 'bg-danger-transparent border border-danger',
    svgPath: 'M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z'
  },
  {
    name: 'Music',
    fileCount: '25 Files',
    size: '15 MB',
    svgColor:'#09ad95',
    fileBgClass:'success',
    colorClass: 'bg-success-transparent border border-success',
    svgPath: 'M10 4L12 6H20C21.1 6 22 6.89 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10M19 9H15.5V13.06L15 13C13.9 13 13 13.9 13 15C13 16.11 13.9 17 15 17C16.11 17 17 16.11 17 15V11H19V9Z'
  },
  {
    name: 'XLS',
    fileCount: '21 Files',
    size: '19 MB',
    svgColor:'#fc5296',
    fileBgClass:'pink',
    colorClass: 'bg-pink-transparent border border-pink',
    svgPath: 'M10,4L12,6H20A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M12.46,10.88L14.59,13L12.46,15.12L13.88,16.54L16,14.41L18.12,16.54L19.54,15.12L17.41,13L19.54,10.88L18.12,9.46L16,11.59L13.88,9.46L12.46,10.88Z'
  },
  {
    name: 'PDF',
    fileCount: '35 Files',
    size: '23 MB',
    colorClass: 'bg-warning-transparent border border-warning',
    svgColor:'#f7b731',
    fileBgClass:'warning',
    svgPath: 'M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z'
  },
  {
    name: 'TXT',
    fileCount: '25 Files',
    size: '15 MB',
    svgColor:'#05c3fb',
    fileBgClass:'secondary',
    colorClass: 'bg-secondary-transparent border border-secondary',
    svgPath: 'M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M15,16H6V14H15V16M18,12H6V10H18V12ZZ'
  },
  {
    name: 'Images',
    fileCount: '21 Files',
    size: '19 MB',
    svgColor:'#fc7303',
    fileBgClass:'orange',
    colorClass: 'bg-orange-transparent border border-orange',
    svgPath: 'M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z'
  },
  {
    name: 'ZIP',
    fileCount: '22 Files',
    size: '10 MB',
    svgColor:'#1170e4',
    fileBgClass:'info',
    colorClass: 'bg-info-transparent border border-info',
    svgPath: 'M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M18 12H16V14H18V16H16V18H14V16H16V14H14V12H16V10H14V8H16V10H18V12Z'
  }
];

files = [
  {
    name: 'file.pdf',
    size: '32 KB',
    image: './assets/images/media/files/documents/6.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'image1.jpg',
    size: '76 KB',
    image: './assets/images/media/files/07.jpg',
    detailsLink: 'filemanager-details.html',
    fileClass: 'w-100 file-manager-list'
  },
  {
    name: 'excel.xls',
    size: '34 KB',
    image: './assets/images/media/files/documents/2.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'nature.jpg',
    size: '66 KB',
    image: './assets/images/media/files/06.jpg',
    detailsLink: 'filemanager-details.html',
    fileClass: 'w-100 file-manager-list'
  },
  {
    name: 'demo.ppt',
    size: '67 KB',
    image: './assets/images/media/files/documents/7.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'video.mp4',
    size: '320 KB',
    image: './assets/images/media/files/documents/10.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'word.doc',
    size: '320 KB',
    image: './assets/images/media/files/documents/8.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'mountain.jpg',
    size: '320 KB',
    image: './assets/images/media/files/01.jpg',
    detailsLink: 'filemanager-details.html',
    fileClass: 'w-100 file-manager-list'
  },
  {
    name: 'file.pdf',
    size: '32 KB',
    image: './assets/images/media/files/documents/6.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'excel.xls',
    size: '34 KB',
    image: './assets/images/media/files/documents/2.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'image1.jpg',
    size: '76 KB',
    image: './assets/images/media/files/02.jpg',
    detailsLink: 'filemanager-details.html',
    fileClass: 'w-100 file-manager-list'
  },
  {
    name: 'profile.ppt',
    size: '67 KB',
    image: './assets/images/media/files/documents/7.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  },
  {
    name: 'image2.jpg',
    size: '66 KB',
    image: './assets/images/media/files/04.jpg',
    detailsLink: 'filemanager-details.html',
    fileClass: 'w-100 file-manager-list'
  },
  {
    name: 'nature.jpg',
    size: '66 KB',
    image: './assets/images/media/files/05.jpg',
    detailsLink: 'filemanager-details.html',
    fileClass: 'w-100 file-manager-list'
  },
  {
    name: 'exe.zip',
    size: '320 KB',
    image: './assets/images/media/files/documents/9.png',
    detailsLink: 'filemanager-details.html',
    customClass: 'mx-auto my-3'
  }
];


}

