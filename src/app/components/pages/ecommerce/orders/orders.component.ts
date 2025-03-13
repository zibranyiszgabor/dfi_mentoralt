import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkOrderCardComponent } from '../../../../@spk/reusable-pages/reusable-ecommerce/spk-order-card/spk-order-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SharedModule,RouterModule,SpkOrderCardComponent,SpkDropdownsComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders = [
    {
      id: '#SPK-12031',
      status: 'Confirmed',
      statusClass: 'bg-success',
      image: './assets/images/ecommerce/orders/1.jpg',
      title: 'Black Digital Camera',
      address: '2nd street, houston texas, united states.',
      deliveryDate: '20-Jan-2023',
      price: '$1,229',
      originalPrice: '$1,799',
      shopLink: '/pages/ecommerce/products',
      canCancel: true,
      ShopStatus:'Shop Similar',
      ShopStatusBg:'info'
    },
    {
      id: '#SPK-1233',
      status: 'Cancelled',
      statusClass: 'bg-danger',
      image: './assets/images/ecommerce/orders/2.jpg',
      title: 'Red & Blue Formal Shoes for men',
      address: '3rd street, houston texas, united states.',
      deliveryDate: '24-Jan-2023',
      price: '$3,229',
      originalPrice: '$1,799',
      shopLink: '/pages/ecommerce/products',
      canCancel: false,
      ShopStatus:'Back to Shop',
      ShopStatusBg:'primary'
    },
    {
      id: '#SPK-1235',
      status: 'Shipped',
      statusClass: 'bg-warning',
      image: './assets/images/ecommerce/orders/11.jpg',
      title: 'Green color money plant',
      address: '3rd street, houston texas, united states.',
      deliveryDate: '24-Jan-2023',
      price: '$2,800',
      originalPrice: '$1,098',
      shopLink: '/pages/ecommerce/products',
      canCancel: true,
      ShopStatus:'Shop Similar',
      ShopStatusBg:'info'
    },
    {
      id: '#SPK-12036',
      status: 'Shipped',
      statusClass: 'bg-warning',
      image: './assets/images/ecommerce/orders/4.jpg',
      title: 'Digital Smart Watch',
      address: '2nd street, houston texas, united states.',
      deliveryDate: '25-Jan-2023',
      price: '$8,800',
      originalPrice: '$6,098',
      shopLink: '/pages/ecommerce/products',
      canCancel: true,
      ShopStatus:'Shop Similar',
      ShopStatusBg:'info'
    },
    {
      id: '#SPK-12037',
      status: 'Confirmed',
      statusClass: 'bg-success',
      image: './assets/images/ecommerce/orders/12.jpg',
      title: 'Women Party Wear Dress',
      address: '2nd street, houston texas, united states.',
      deliveryDate: '28-Jan-2023',
      price: '$1,234',
      originalPrice: '$880',
      shopLink: '/pages/ecommerce/products',
      canCancel: true,
      ShopStatus:'Shop Similar',
      ShopStatusBg:'info'
    },
    {
      id: '#SPK-12038',
      status: 'Out For Delivery',
      statusClass: 'bg-primary',
      image: './assets/images/ecommerce/orders/10.jpg',
      title: 'Stylish Rockerz 255 Ear Pods',
      address: '2nd street, houston texas, united states.',
      deliveryDate: '30-Jan-2023',
      price: '$5,234',
      originalPrice: '$580',
      shopLink: '/pages/ecommerce/products',
      canCancel: true,
        ShopStatus:'Shop Similar',
      ShopStatusBg:'info'
    },
    {
      id: '#SPK-1239',
      status: 'Cancelled',
      statusClass: 'bg-danger',
      image: './assets/images/ecommerce/orders/13.jpg',
      title: 'Omega Running Shoes for men',
      address: '3rd street, houston texas, united states.',
      deliveryDate: '24-Jan-2023',
      price: '$4,229',
      originalPrice: '$2,799',
      shopLink: '/pages/ecommerce/products',
      canCancel: false,
        ShopStatus:'Back to Shop',
      ShopStatusBg:'primary'
    },
    {
      id: '#SPK-120348',
      status: 'Out For Delivery',
      statusClass: 'bg-primary',
      image: './assets/images/ecommerce/orders/16.jpg',
      title: 'Candy Pure Rose Water',
      address: '2nd street, houston texas, united states.',
      deliveryDate: '31-Jan-2023',
      price: '$4,234',
      originalPrice: '$280',
      shopLink: '/pages/ecommerce/products',
      canCancel: true,
        ShopStatus:'Shop Similar',
      ShopStatusBg:'info'
    },
    {
      id: '#SPK-12043',
      status: 'Confirmed',
      statusClass: 'bg-success',
      image: './assets/images/ecommerce/orders/14.jpg',
      title: 'Light pink nail polish',
      address: '2nd street, houston texas, united states.',
      deliveryDate: '31-Jan-2023',
      price: '$9,229',
      originalPrice: '$4,799',
      shopLink: '/pages/ecommerce/products',
      canCancel: true,
        ShopStatus:'Shop Similar',
      ShopStatusBg:'info'
    },
  ];
  
}