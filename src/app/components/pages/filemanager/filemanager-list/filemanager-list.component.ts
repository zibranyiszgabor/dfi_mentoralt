import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpkFilemanagerListComponent } from '../../../../@spk/reusable-pages/spk-filemanager-list/spk-filemanager-list.component';

@Component({
  selector: 'app-filemanager-list',
  standalone: true,
  imports: [SharedModule,SpkFilemanagerListComponent],
  templateUrl: './filemanager-list.component.html',
  styleUrl: './filemanager-list.component.scss'
})
export class FilemanagerListComponent {
  files = [
    {
      name: 'image2.jpg',
      size: '66 KB',
      image: './assets/images/media/files/03.jpg',
      fileClass: 'file-manager-list w-100'
    },
    {
      name: 'file.pdf',
      size: '32 KB',
      image: './assets/images/media/files/documents/6.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'image1.jpg',
      size: '76 KB',
      image: './assets/images/media/files/07.jpg',
      fileClass: 'file-manager-list w-100'
    },
    {
      name: 'excel.xls',
      size: '34 KB',
      image: './assets/images/media/files/documents/2.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'nature.jpg',
      size: '66 KB',
      image: './assets/images/media/files/06.jpg',
      fileClass: 'file-manager-list w-100'
    },
    {
      name: 'demo.ppt',
      size: '67 KB',
      image: './assets/images/media/files/documents/7.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'image1.jpg',
      size: '76 KB',
      image: './assets/images/media/files/02.jpg',
      fileClass: 'file-manager-list w-100'
    },
    {
      name: 'video.mp4',
      size: '320 KB',
      image: './assets/images/media/files/documents/10.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'word.doc',
      size: '320 KB',
      image: './assets/images/media/files/documents/8.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'image1.jpg',
      size: '320 KB',
      image: './assets/images/media/files/01.jpg',
      fileClass: 'file-manager-list w-100'
    },
    {
      name: 'file.pdf',
      size: '32 KB',
      image: './assets/images/media/files/documents/6.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'excel.xls',
      size: '34 KB',
      image: './assets/images/media/files/documents/2.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'profile.ppt',
      size: '67 KB',
      image: './assets/images/media/files/documents/7.png',
      customClass: 'mx-auto my-3'
    },
    {
      name: 'nature.jpg',
      size: '66 KB',
      image: './assets/images/media/files/04.jpg',
      fileClass: 'file-manager-list w-100'
    },
    {
      name: 'exe.zip',
      size: '320 KB',
      image: './assets/images/media/files/documents/9.png',
      customClass: 'mx-auto my-3'
    }
  ];
  
}
