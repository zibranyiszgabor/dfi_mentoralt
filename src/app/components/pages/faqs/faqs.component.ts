import { Component } from '@angular/core';
import { NgbAccordionConfig,NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionComponent } from '../../../@spk/reusable-ui-elements/ngb-accordion/ngb-accordion.component';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [SharedModule,NgbCollapseModule,NgbAccordionModule,NgbModule,NgbAccordionComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  panels=[
    { 
      title: 'Where can I subscribe to your newsletter?',
      body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow.",  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: false
     },
    {
       title: 'Where can in edit my address?',
       body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow.",
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: 'What are your opening hours?', 
       body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow..",
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true
      },
      {
        title: 'Do I have the right to return an item?', 
        body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow.",
        headingId: 'headingFour', 
        collapseId: 'collapseFour' ,
        collapsed: true
       },
  ]
panels1:any = [
  {
    title:'What is the order procedure?',
    body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow.",
    headingId: 'headingOne',
    collapseId: 'collapseOne', 
    collapsed: true
  },
  {
    title:'How and when do I receive the invoices? ',
    body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow.",
    headingId: 'headingTwo', 
    collapseId: 'collapseTwo',
    collapsed: false
  },
  {
    title:'Which method of ordering is best for me?',
    body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow.",
    headingId: 'headingThree', 
    collapseId: 'collapseThree' ,
    collapsed: true
  },
  {
    title:'What does an order cost?',
    body: "This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element <code>.accordion-body</code>, though the transition does limit overflow.",
    headingId: 'headingFour', 
    collapseId: 'collapseFour' ,
    collapsed: true
  },
  
];

  isCollapsed = true;
}
