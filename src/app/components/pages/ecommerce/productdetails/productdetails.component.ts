import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition,GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import Swiper from 'swiper'
import { register as registerSwiperElements } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
Swiper.use([Autoplay, Navigation, Pagination]);
registerSwiperElements();

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [SharedModule,RouterModule,GalleryModule,NgbModule,NgbCollapseModule,CommonModule,
    LightboxModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
  isCollapsed = true;
  active = 1
  private galleryThumbs!: Swiper;
  private galleryView!: Swiper;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;

  ngAfterViewInit() {
    this.initSwipers();
    setTimeout(() => {
      if (this.swiperContainer1) {
        const swiperEl = this.swiperContainer1.nativeElement;

        Object.assign(swiperEl, {
          slidesPerView: 5,
          spaceBetween: 10,
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            1110: { slidesPerView: 3, spaceBetween: 20 },
            1300: { slidesPerView: 5, spaceBetween: 20 }
          },
        });
      }
    });
  }

  private initSwipers(): void {
    this.galleryThumbs = new Swiper('.swiper-view-details', {
      direction: 'horizontal',
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          direction: 'horizontal',
          spaceBetween: 10,
        },
        768: {
          direction: 'horizontal',
          spaceBetween: 10,
        },
      },
    });

    this.galleryView = new Swiper('.swiper-preview-details', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      freeMode: true,
      watchSlidesProgress: true,
      thumbs: {
        swiper: this.galleryThumbs,
      },
      breakpoints: {
        0: {
          direction: 'horizontal',
          spaceBetween: 20,
        },
        768: {
          direction: 'horizontal',
          spaceBetween: 20,
        },
      },
      spaceBetween: 20, 
    });

    // Add click event for the gallery thumbnails
    this.addClickEventToThumbnails();
  }

  private addClickEventToThumbnails(): void {
    const thumbnails = document.querySelectorAll('.swiper-view-details .swiper-slide');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        this.galleryView.slideTo(index); // Navigate to the corresponding slide

        // Remove the active class from all thumbnails
        thumbnails.forEach(tn => tn.classList.remove('swiper-slide-thumb-active'));

        // Add the active class to the clicked thumbnail
        thumbnail.classList.add('swiper-slide-thumb-active');
      });
    });
  }

  products = [
    {
      image: './assets/images/ecommerce/6.png',
      name: 'Omega Mens Branded Jacket',
      price: 1099,
      originalPrice: 0,
      discount: 25,
      rating: 4.4,
      reviews: 13256
    },
    {
      image: './assets/images/ecommerce/7.png',
      name: 'Omega Mens Branded Jacket',
      price: 2099,
      originalPrice: 0,
      discount: 20,
      rating: 4.0,
      reviews: 13256
    },
    {
      image: './assets/images/ecommerce/8.png',
      name: 'Omega Mens Branded Jacket',
      price: 15099,
      originalPrice: 8759,
      discount: 55,
      rating: 4.3,
      reviews: 18256
    },
    {
      image: './assets/images/ecommerce/9.png',
      name: 'Omega Mens Branded Jacket',
      price: 4099,
      originalPrice: 2759,
      discount: 40,
      rating: 4.4,
      reviews: 19256
    },
    {
      image: './assets/images/ecommerce/10.png',
      name: 'Omega Mens Branded Jacket',
      price: 5099,
      originalPrice: 0,
      discount: 20,
      rating: 4.4,
      reviews: 13256
    },
    {
      image: './assets/images/ecommerce/11.png',
      name: 'Omega Mens Branded Jacket',
      price: 6099,
      originalPrice: 1759,
      discount: 35,
      rating: 3.5,
      reviews: 19256
    }
  ];
}