import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkReusableTablesComponent } from '../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';
const DATA=[
  {
    id: 'product1',
    image: './assets/images/ecommerce/orders/1.jpg',
    name: 'Black Digital Camera',
    category: 'Clothing',
    price: 1299,
    quantity: 283,
    gender: 'Male',
    company: 'Apilla.co.in',
    date: '24,Nov 2022 - 04:42PM',
    checked:false,
  },
  {
    id: 'product2',
    image: './assets/images/ecommerce/orders/2.jpg',
    name: 'Red & Blue Formal Shoes for men',
    category: 'Clothing',
    price: 799,
    quantity: 98,
    gender: 'Male',
    company: 'Donzo Company',
    checked:false,
    date: '18,Nov 2022 - 06:53AM'
  },
  {
    id: 'product3',
    image: './assets/images/ecommerce/orders/11.jpg',
    name: 'Green color money plant',
    category: 'Watches',
    price: 349,
    quantity: 1293,
    gender: 'Male,Female',
    company: 'SlowTrack Company',
    checked:false,
    date: '21,Oct 2022 - 11:36AM'
  },
  {
    id: 'product4',
    image: './assets/images/ecommerce/orders/4.jpg',
    name: 'Digital Smart Watch',
    category: 'Clothing',
    checked:false,
    price: 189,
    quantity: 322,
    gender: 'Female',
    company: 'WoodHill.co.in',
    date: '16,Oct 2022 - 12:45AM'
  },
  {
    id: 'product5',
    image: './assets/images/ecommerce/orders/12.jpg',
    name: 'Women Party Wear Dress',
    category: 'Clothing',
    price: 2499,
    quantity: 194,
    gender: 'Male,Female',
    company: 'Watches.co.in',
    checked:false,
    date: '12,Aug 2022 - 11:21AM'
  },
  {
    id: 'product6',
    image: './assets/images/ecommerce/orders/10.jpg',
    name: 'Stylish Rockerz 255 Ear Pods',
    category: 'Watches',
    price: 899,
    quantity: 267,
    gender: 'Male,Female',
    company: 'Watches.co.in',
    checked:false,
    date: '05,Sep 2022 - 10:14AM'
  },
  {
    id: 'product7',
    image: './assets/images/ecommerce/orders/13.jpg',
    name: 'Omega Running Shoes for men',
    category: 'Clothing',
    price: 499,
    quantity: 143,
    gender: 'Female',
    company: 'Louie Philippe',
    checked:false,
    date: '18,Nov 2022 - 14:35PM'
  },
  {
    id: 'product8',
    image: './assets/images/ecommerce/orders/16.jpg',
    name: 'Candy Pure Rose Water',
    category: 'Watches',
    price: 999,
    quantity: 365,
    gender: 'Female',
    checked:false,
    company: 'Kohino.zaps.com',
    date: '27,Nov 2022 - 05:12AM'
  },
  {
    id: 'product9',
    image: './assets/images/ecommerce/orders/14.jpg',
    name: 'Light pink nail polish',
    category: 'Watches',
    price: 1499,
    quantity: 257,
    gender: 'Male,Female',
    checked:false,
    company: 'Appole Corporation',
    date: '29,Nov 2022 - 16:32PM'
  }

]
@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [SharedModule,RouterModule,FormsModule,ReactiveFormsModule,SpkReusableTablesComponent],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.scss'
})
export class ProductslistComponent {
  lists=DATA
  toggleRowChecked(row: any): void {
    // Check if all rows are selected
    this.allTasksChecked = this.lists.every(row => row.checked);

    // Update the state of the header checkbox accordingly
  }
  handleToggleSelectAll(checked: any) {
    this.lists.forEach(list => list.checked = checked);
    this.allTasksChecked = checked;
  }

  Remove(id: any) {
    var Outputdata = this.lists.filter((x) => {
      return x.id != id;
    });
    this.lists = Outputdata;
  }

  Clear = () => {
    this.lists = [];
  };
  allTasksChecked: boolean = false;
  tasks: any[] = [/* your tasks here */];

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
  productlistColumns=[
    {header:"Product",field:"Product"},
    {header:"Category",field:"Category"},
    {header:"Price",field:"Price"},
    {header:"Stock",field:"Stock"},
    {header:"Status",field:"Status"},
    {header:"Seller",field:"Seller"},
    {header:"Published",field:"Published"},
    {header:"Action",field:"Action"},



  ]
}
