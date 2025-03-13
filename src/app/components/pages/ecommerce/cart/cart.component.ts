import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, FormsModule, RouterModule,NgbModule,SpkReusableTablesComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor() {}
  confirmAlert(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true, // This shows the Cancel button
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true // Optional: reverses the position of the confirm and cancel buttons
    }).then((result) => {
      if (result.isConfirmed) { // result.isConfirmed is true if "Yes, delete it!" was clicked
        const data = this.productList.filter((x: { id: string }) => x.id !== id);
        this.productList = data;
        Swal.fire('Deleted!', 'Your item has been deleted!', 'success');
      } else { 
        // User clicked "Cancel" or closed the alert
    
      }
    });
  }

  Clear = () => {
    this.productList = [];
  };

  productList = [
    {
      id:'1',
      name: 'laborum et dolorum fuga',
      image: './assets/images/ecommerce/orders/12.jpg',
      size: 'Large',
      color: 'White',
      offer: 'In Offer',
      offerBadgeClass: 'bg-success-transparent',
      price: 459,
      quantity: 2,
      total: 918,
    },
    {
      id:'2',
      name: 'laborum et dolorum fuga',
      image: './assets/images/ecommerce/orders/7.jpg',
      size: 'Medium',
      color: 'White',
      offer: '25% discount',
      offerBadgeClass: 'bg-secondary',
      price: 129,
      quantity: 1,
      total: 129,
    },
    {
      id:'3',
      name: 'laborum et dolorum fuga',
      image: './assets/images/ecommerce/orders/5.jpg',
      size: '44mm dial',
      color: 'Creamy white',
      offer: 'On Offer',
      offerBadgeClass: 'bg-success-transparent',
      price: 249,
      quantity: 2,
      total: 498,
    },
    {
      id:'4',
      name: 'laborum et dolorum fuga',
      image: './assets/images/ecommerce/orders/2.jpg',
      size: 'Medium',
      color: 'Light orange',
      offer: 'On Offer',
      offerBadgeClass: 'bg-success-transparent',
      price: 249,
      quantity: 2,
      total: 498,
    },
    {
      id:'5',
      name: 'laborum et dolorum fuga',
      image: './assets/images/ecommerce/orders/3.jpg',
      size: 'Large',
      color: 'Black',
      offer: '',
      offerBadgeClass: '',
      price: 1299,
      quantity: 1,
      total: 1299,
    },
  ];

  increaseQuantity(product: any) {
    product.quantity++;
    product.total = product.price * product.quantity;
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      product.total = product.price * product.quantity;
    }
  }

  cartColumn=[
    {header:"Product Name",field:"product"},
    {header:"Price",field:"price"},
    {header:"Quantity",field:"quantity"},
    {header:"Total",field:"total"},
    {header:"Action",field:"action"},
  ]
}
