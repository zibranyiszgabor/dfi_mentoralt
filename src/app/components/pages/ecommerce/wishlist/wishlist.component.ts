import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
const DATA=[
  {
    id: 'product1',
    image: './assets/images/ecommerce/products/1.jpg',
    name: 'Women Party Wear Dress',
    category: 'Clothing',
    price: 229,
    originalPrice: 1799,
    discount: 72,
    rating: 4.2,
    reviews: 13256
  },
  {
    id: 'product2',
    image: './assets/images/ecommerce/products/2.jpg',
    name: 'Running Shoes for men',
    category: 'Clothing',
    price: 599,
    originalPrice: 2499,
    discount: 75,
    rating: 4.0,
    reviews: 13256
  },
  {
    id: 'product3',
    image: './assets/images/ecommerce/products/3.jpg',
    name: 'Flower Pot for Home Decor',
    category: 'Watches',
    price: 1199,
    originalPrice: 3299,
    discount: 62,
    rating: 4.5,
    reviews: 18256
  },
  {
    id: 'product4',
    image: './assets/images/ecommerce/products/4.jpg',
    name: 'Men shirt for party wear',
    category: 'Clothing',
    price: 349,
    originalPrice: 1299,
    discount: 60,
    rating: 4.2,
    reviews: 19256
  },
  {
    id: 'product5',
    image: './assets/images/ecommerce/products/5.jpg',
    name: 'Black Digital Camera',
    category: 'Watches',
    price: 1899,
    originalPrice: 3799,
    discount: 50,
    rating: 4.5,
    reviews: 13256
  },
  {
    id: 'product6',
    image: './assets/images/ecommerce/products/6.jpg',
    name: 'Light pink nail polish',
    category: 'Clothing',
    price: 1499,
    originalPrice: 2499,
    discount: 38,
    rating: 4.1,
    reviews: 14999
  },
  {
    id: 'product7',
    image: './assets/images/ecommerce/products/7.jpg',
    name: 'Stylish Rockerz 255 Ear Pods',
    category: 'Watches',
    price: 299,
    originalPrice: 399,
    discount: 35,
    rating: 4.4,
    reviews: 19999
  },
  {
    id: 'product8',
    image: './assets/images/ecommerce/products/8.jpg',
    name: 'Candy Pure Rose Water',
    category: 'Watches',
    price: 2399,
    originalPrice: 5699,
    discount: 72,
    rating: 3.8,
    reviews: 21999
  }
];
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  items=DATA

  ConformAlert(id:string) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#0162e8',
      confirmButtonText: 'Remove',
      confirmButtonColor: '#0162e8',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Removed!',
          text: 'Your imaginary file has been Removed.',
          icon: 'success',
          confirmButtonColor: '#0162e8',
          
        });
        const data = this.items.filter((x: { id: string }) => x.id !== id);
        this.items = data;
         Swal.fire("Removed!", "Your imaginary file has been Removed!", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire({
        //   title: 'Cancelled!',
        //   text: 'Your imaginary file is safe :)',
        //   icon: 'error',
        //   confirmButtonColor: '#0162e8',
        // });
      }
    });

     }
 
  Clear = () => {
    this.items = [];
  };
}
