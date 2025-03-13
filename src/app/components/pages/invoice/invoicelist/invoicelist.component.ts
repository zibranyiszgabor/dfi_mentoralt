import { Component } from '@angular/core';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';
const  DATA = [
  {
    name: 'Json Taylor',
    email: 'jsontaylor2416@gmail.com',
    image: './assets/images/faces/11.jpg',
    invoiceNumber: '#SPK12032901',
    invoiceDate: '25,Nov 2022',
    amount: '$212.45',
    status: { text: 'Paid', class: 'bg-success-transparent' },
    dueDate: '25,Dec 2022'
  },
  {
    name: 'Suzika Stallone',
    email: 'suzikastallone3214@gmail.com',
    image: './assets/images/faces/7.jpg',
    invoiceNumber: '#SPK12032912',
    invoiceDate: '13,Nov 2022',
    amount: '$512.99',
    status: { text: 'Pending', class: 'bg-warning-transparent' },
    dueDate: '13,Dec 2022'
  },
  {
    name: 'Roman Killon',
    email: 'romankillon143@gmail.com',
    image: './assets/images/faces/15.jpg',
    invoiceNumber: '#SPK12032945',
    invoiceDate: '30,Nov 2022',
    amount: '$2199.49',
    status: { text: 'Overdue', class: 'bg-danger-transparent' },
    dueDate: '30,Dec 2022'
  },
  {
    name: 'Charlie Davieson',
    email: 'charliedavieson@gmail.com',
    image: './assets/images/faces/12.jpg',
    invoiceNumber: '#SPK12032922',
    invoiceDate: '18,Nov 2022',
    amount: '$1569.99',
    status: { text: 'Paid', class: 'bg-success-transparent' },
    dueDate: '18,Dec 2022'
  },
  {
    name: 'Selena Deoyl',
    email: 'selenadeoyl114@gmail.com',
    image: './assets/images/faces/4.jpg',
    invoiceNumber: '#SPK12032932',
    invoiceDate: '18,Nov 2022',
    amount: '$4,873.99',
    status: { text: 'Due By 1 Day', class: 'bg-primary-transparent' },
    dueDate: '18,Dec 2022'
  },
  {
    name: 'Kiara Advensh',
    email: 'kiaraadvensh87@gmail.com',
    image: './assets/images/faces/7.jpg',
    invoiceNumber: '#SPK12032978',
    invoiceDate: '02,Nov 2022',
    amount: '$1923.99',
    status: { text: 'Paid', class: 'bg-success-transparent' },
    dueDate: '18,Dec 2022'
  },
  {
    name: 'Joseph Samurai',
    email: 'josephsamurai@gmail.com',
    image: './assets/images/faces/9.jpg',
    invoiceNumber: '#SPK12032919',
    invoiceDate: '15,Nov 2022',
    amount: '$1,623.99',
    status: { text: 'Paid', class: 'bg-success-transparent' },
    dueDate: '15,Dec 2022'
  },
  {
    name: 'Kevin Powell',
    email: 'kevinpowell@gmail.com',
    image: './assets/images/faces/13.jpg',
    invoiceNumber: '#SPK12032931',
    invoiceDate: '21,Nov 2022',
    amount: '$3,423.99',
    status: { text: 'Pending', class: 'bg-warning-transparent' },
    dueDate: '21,Dec 2022'
  },
  {
    name: 'Darla Jung',
    email: 'darlajung555@gmail.com',
    image: './assets/images/faces/8.jpg',
    invoiceNumber: '#SPK12032958',
    invoiceDate: '15,Oct 2022',
    amount: '$2,982.99',
    status: { text: 'Paid', class: 'bg-success-transparent' },
    dueDate: '15,Nov 2022'
  }
];

@Component({
  selector: 'app-invoicelist',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,RouterModule,SpkReusableTablesComponent,NgbTooltipModule,SpkDropdownsComponent], 
  templateUrl: './invoicelist.component.html', 
  styleUrl: './invoicelist.component.scss'
})
export class InvoicelistComponent {
  invoices=DATA
  deleteInvoice(index: number): void {
      this.invoices.splice(index, 1);
  }

invoiceColumn=[
  {header:"Client",field:"Client"},
  {header:"Invoice ID",field:"Invoice ID"},
  {header:"Issued Date",field:"Issued Date"},
  {header:"Amount",field:"Amount"},
  {header:"Status",field:"Status"},
  {header:"Due Date",field:"Due Date"},
  {header:"Action",field:"Action"},
]
}
