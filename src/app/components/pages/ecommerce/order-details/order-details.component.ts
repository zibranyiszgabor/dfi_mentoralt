import { Component } from '@angular/core';
import {NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [SharedModule,NgbAccordionModule,SpkReusableTablesComponent,CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
 
 constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
 }

orderColumn=[
  {header:"Item",field:"Item"},
  {header:"Tracking No",field:"Tracking ID"},
  {header:"Price",field:"Price"},
  {header:"Quantity",field:"Quantity"},
  {header:"Total Price",field:"Total Price"},
]

products = [
  {
    name: 'Sports shoes series 4',
    image: './assets/images/ecommerce/orders/2.jpg',
    sizeLabel: 'Dial Size',
    size: '44mm',
    color: 'Metallic Black',
    id: 'SPK1218153635',
    price: 1249,
    quantity: 1,
    total: 1249,
    offer: '',
    badgeClass: '',
  },
  {
    name: 'Cactus plant with gray color pot',
    image: './assets/images/ecommerce/orders/11.jpg',
    sizeLabel: 'Size',
    size: 'Large',
    color: 'Orange',
    id: 'SPK1120324532',
    price: 799,
    quantity: 1,
    total: 799,
    offer: '32% Off',
    badgeClass: 'bg-info',
  },
  {
    name: 'Smart watch for women',
    image: './assets/images/ecommerce/orders/4.jpg',
    sizeLabel: 'Size',
    size: 'Large',
    color: 'Orange',
    id: 'SPK1120324932',
    price: 800,
    quantity: 2,
    total: 1600,
    offer: '32% Off',
    badgeClass: 'bg-info',
  },
  {
    name: 'Black Digital Camera',
    image: './assets/images/ecommerce/orders/1.jpg',
    sizeLabel: 'Dial Size',
    size: '44mm',
    color: 'Metallic Black',
    id: 'SPK12181536395',
    price: 7249,
    quantity: 1,
    total: 7249,
    offer: '',
    badgeClass: '',
  },
];

cartSummary = [
  { label: 'Total Items', value: '06' },
  { label: 'Applied Coupon', value: '<span class="badge bg-success-transparent">SP0578A</span>' },
  { label: 'Delivery Fees', value: '<span class="text-danger">+$29</span>' },
  { label: 'Sub Total', value: '<span class="fs-14 fw-medium">$3,799</span>' },
  { label: 'Total Price', value: '<span class="fs-20 fw-semibold">$3,129</span>' }
];
}
