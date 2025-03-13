import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkNgSelectComponent } from '../../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule,SharedModule,ReactiveFormsModule,FormsModule,NgSelectModule,NgbNavModule,SpkNgSelectComponent],
  templateUrl: './checkout.component.html',
 
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  firstFormGroup!: FormGroup; // Use the definite assignment operator
  secondFormGroup!: FormGroup; // Use the definite assignment operator

  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private modalService: NgbModal) {}

  navigateToTab(tabIndex: number, nav: any): void {
    nav.select(tabIndex); // Programmatically select the tab
  }

  Address(content: any) {
    this.modalService.open(content,{ size: 'lg' });
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    const plus: any = document.querySelectorAll('.plus');
    const minus: any = document.querySelectorAll('.minus');
    function perfectChart() {
      plus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }
  quantity: number = 1;
  
  GiftData=[
    {label:'Free Delivery',value:1},
    {label:'Custom Gift Set',value:2},
    {label:'Sweater Subscription',value:3},
    {label:'Wrapped with Elegance',value:4},
  ]
  ServiceData=[
    {label:'Care+Package($10.00)',value:1},
    {label:'Environmental Friendly($2.00)',value:2},
    {label:'Golden Guard($5.00)',value:3},
  ]
  cityData=[
    {label:'Georgetown',value:1},
    {label:'Alexandria',value:2},
    {label:'Rockville',value:3},
    {label:'Frederick',value:4},
  ]
  StateData=[
    {label:'Washington,D.C',value:1},
    {label:'California',value:2},
    {label:'Texas',value:3},
    {label:'Alaska',value:4},
  ]
  handleSelectChange(value: any | any[]) {
  }
}
