import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import * as noUiSlider from 'nouislider';
import { SpkProductCardComponent } from '../../../../@spk/reusable-pages/reusable-ecommerce/spk-product-card/spk-product-card.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, RouterModule, NouisliderModule,
    NgbCollapseModule, FormsModule, NgbDropdownModule, MaterialModuleModule, NgbModule,SpkProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  isCollapsed = true;
  isCollapsed1 = true;
  isCollapsed3 = true;
  collapse1: any;

  lowerValue: number = 8000;
  upperValue: number = 40000;

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [0],
        'max': [50000]
      }
    });

    const lowerValueElem :any= document.getElementById('lower-value');
    const upperValueElem:any = document.getElementById('upper-value');

    slider.noUiSlider?.on('update', (values: any, handle: any) => {
      if (handle === 0) {
        this.lowerValue = Math.round(values[0] as number);
        lowerValueElem.innerHTML = this.lowerValue.toString();
      } else {
        this.upperValue = Math.round(values[1] as number);
        upperValueElem.innerHTML = this.upperValue.toString();
      }
    });
  }

  products = [
    {
      image: './assets/images/ecommerce/products/1.jpg',
      name: 'Women Party Wear Dress',
      description: 'laborum et dolorum fuga',
      price: 229,
      originalPrice: '1,799',
      discountPercentage: 72,
      rating: 4.2,
      offerPrice: 229,
    },
    {
      image: './assets/images/ecommerce/products/2.jpg',
      name: 'Running Shoes for men',
      description: 'laborum et dolorum fuga',
      price: 599,
      originalPrice: '2,499',
      discountPercentage: 75,
      rating: 4.1,
      offerPrice: 599,
    },
    {
      image: './assets/images/ecommerce/products/3.jpg',
      name: 'Flower Pot for Home Decor',
      description: 'laborum et dolorum fuga',
      price: 1199,
      originalPrice: '3,299',
      discountPercentage: 62,
      rating: 4.5,
      offerPrice: '1,199',
    },
    {
      image: './assets/images/ecommerce/products/4.jpg',
      name: 'Men shirt for party wear',
      description: 'laborum et dolorum fuga',
      price: 349,
      originalPrice: '1,299',
      discountPercentage: 60,
      rating: 4.2,
      offerPrice: 349,
    },
    {
      image: './assets/images/ecommerce/products/5.jpg',
      name: 'Black Digital Camera',
      description: 'laborum et dolorum fuga',
      price: 1899,
      originalPrice: '3,799',
      discountPercentage: 50,
      rating: 4.5,
      offerPrice: '1,899',
    },
    {
      image: './assets/images/ecommerce/products/6.jpg',
      name: 'Light pink nail polish',
      description: 'laborum et dolorum fuga',
      price: 1499,
      originalPrice: '2,499',
      discountPercentage: 38,
      rating: 4.1,
      offerPrice: '1,499',
    },
    {
      image: './assets/images/ecommerce/products/7.jpg',
      name: 'Stylish Rockerz 255 Ear Pods',
      description: 'laborum et dolorum fuga',
      price: 299,
      originalPrice: '399',
      discountPercentage: 35,
      rating: 4.4,
      offerPrice: 299,
    },
    {
      image: './assets/images/ecommerce/products/8.jpg',
      name: 'Candy Pure Rose Water',
      description: 'laborum et dolorum fuga',
      price: 2399,
      originalPrice: '5,699',
      discountPercentage: 72,
      rating: 3.8,
      offerPrice: '2,399',
    },
    {
      image: './assets/images/ecommerce/products/9.jpg',
      name: 'Black Tshirt for Men',
      description: 'laborum et dolorum fuga',
      price: 1899,
      originalPrice: '3,299',
      discountPercentage: 60,
      rating: 4.1,
      offerPrice: '1,899',
    }
  ];

}