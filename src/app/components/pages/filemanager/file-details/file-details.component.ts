import { Component, ElementRef } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { Gallery, GalleryItem, GalleryModule, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import {  Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { RouterModule } from '@angular/router';
import { SpkGalleryComponent } from '../../../../@spk/reusable-plugins/spk-gallery/spk-gallery.component';
import { SpkReusableTablesComponent } from "../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { SpkFileDetailsCardComponent } from '../../../../@spk/reusable-pages/spk-file-details-card/spk-file-details-card.component';

@Component({
  selector: 'app-file-details',
  standalone: true,
  imports: [SharedModule, CarouselModule, NgbModule, GalleryModule, LightboxModule, RouterModule, SpkGalleryComponent, SpkReusableTablesComponent,SpkFileDetailsCardComponent],
  templateUrl: './file-details.component.html',
  styleUrl: './file-details.component.scss'
})
export class FileDetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    rtl:false,
    mouseDrag: true,
    touchDrag: true,
    margin:10,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: ['<', '>'],
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {items: 1},
      400: { items: 2 },
      740: {  items: 4},
      1000: { items: 4},
    },
    nav: true,
  };



  
  ngOnInit(): void {
 
 
    const ltr = this.elementRef.nativeElement.querySelectorAll('#switcher-ltr');
    const rtl = this.elementRef.nativeElement.querySelectorAll('#switcher-rtl');

    fromEvent(ltr, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: false };
    });

    fromEvent(rtl, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: true, autoplay: true };
    });

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  
  }

 constructor(public gallery: Gallery, public lightbox: Lightbox,private sanitizer: DomSanitizer,private elementRef: ElementRef ) {}
  items: GalleryItem[] = [];

  imageData=DATA;
  fileDetails = [
    { key: 'File Name', value: 'Nature.jpg' },
    { key: 'File Size', value: '799KB' },
    { key: 'Created Date', value: '1-10-2023' },
    { key: 'Modified Date', value: '10-10-2023' },
    { key: 'File Location', value: 'Location/file/Images/Nature.jpg' },
    { key: 'Height', value: '500px' },
    { key: 'Width', value: '750px' },
    { key: 'Uploaded by', value: 'Ali AronJohn' },
  ];

  folders = [
    {
      image: './assets/images/media/files/documents/5.png',
      name: 'Images',
      fileCount: 246,
      size: '214.32MB'
    },
    {
      image: './assets/images/media/files/documents/8.png',
      name: 'Docs',
      fileCount: 17,
      size: '432.39KB'
    },
    {
      image: './assets/images/media/files/documents/9.png',
      name: 'Downloads',
      fileCount: 437,
      size: '3.12GB'
    },
    {
      image: './assets/images/media/files/documents/11.png',
      name: 'Apps',
      fileCount: 165,
      size: '12.56GB'
    }
  ];

}

const DATA = [
  {
    id:1,
    srcUrl: "./assets/images/media/media-40.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    previewUrl: "./assets/images/media/media-40.jpg.jpg",
  },
  {
    id:2,
    srcUrl: "./assets/images/media/media-41.jpg",
    previewUrl: "./assets/images/media/media-41.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:3,
    srcUrl: "./assets/images/media/media-27.jpg",
    previewUrl: "./assets/images/media/media-27.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:4,
    srcUrl: "./assets/images/media/media-28.jpg",
    previewUrl: "./assets/images/media/media-28.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:5,
    srcUrl: "./assets/images/media/media-29.jpg",
    previewUrl: "./assets/images/media/media-29.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:6,
    srcUrl: "./assets/images/media/media-30.jpg",
    previewUrl: "./assets/images/media/media-30.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:7,
    srcUrl: "./assets/images/media/media-31.jpg",
    previewUrl: "./assets/images/media/media-31.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:8,
    srcUrl: "./assets/images/media/media-33.jpg",
    previewUrl: "./assets/images/media/media-33.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:9,
    srcUrl: "./assets/images/media/media-32.jpg",
    previewUrl: "./assets/images/media/media-32.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
];
