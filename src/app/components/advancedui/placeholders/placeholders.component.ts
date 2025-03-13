import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as codeData from '../../../shared/prismData/placeholders';

@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './placeholders.component.html',
  styleUrl: './placeholders.component.scss'
})
export class PlaceholdersComponent {

  isContentVisible1 = false;
  isContentVisible2 = false;
  isContentVisible3 = false;
  isContentVisible4 = false;
  isContentVisible5 = false;
  isContentVisible6 = false;
  isContentVisible7 = false;
  isContentVisible8 = false;





  toggleClass1 = "line";
  toggleClass2 = "line";
  toggleClass3 = "line";
  toggleClass4 = "line";
  toggleClass5 = "line";
  toggleClass6 = "line";
  toggleClass7 = "line";
  toggleClass8 = "line";

 


  

  ts1: string = codeData.placeholderTS1;
  ts2: string = codeData.placeholderTS2;
  ts3: string = codeData.placeholderTS3;
  ts4: string = codeData.placeholderTS4;


 
  toggleInput1() {
    this.isContentVisible1 = !this.isContentVisible1;
    if (this.toggleClass1 === "line") {
      this.toggleClass1 = "off-line";
    } else {
      this.toggleClass1 = "line";
    }
  }
  
  
  toggleInput2() {
    this.isContentVisible2 = !this.isContentVisible2;
    if (this.toggleClass2 === "line") {
      this.toggleClass2 = "off-line";
    } else {
      this.toggleClass2 = "line";
    }
  }  
  
  toggleInput3() {
    this.isContentVisible3= !this.isContentVisible3;
    if (this.toggleClass3=== "line") {
      this.toggleClass3= "off-line";
    } else {
      this.toggleClass3= "line";
    }
  }  
  
  toggleInput4() {
    this.isContentVisible4 = !this.isContentVisible4;
    if (this.toggleClass4 === "line") {
      this.toggleClass4 = "off-line";
    } else {
      this.toggleClass4 = "line";
    }
  }  
  
  toggleInput5() {
    this.isContentVisible5 = !this.isContentVisible5;
    if (this.toggleClass5 === "line") {
      this.toggleClass5 = "off-line";
    } else {
      this.toggleClass5 = "line";
    }
  }  
  
  toggleInput6() {
    this.isContentVisible6 = !this.isContentVisible6;
    if (this.toggleClass6 === "line") {
      this.toggleClass6 = "off-line";
    } else {
      this.toggleClass6 = "line";
    }
  }  
  
  toggleInput7() {
    this.isContentVisible7 = !this.isContentVisible7;
    if (this.toggleClass7 === "line") {
      this.toggleClass7 = "off-line";
    } else {
      this.toggleClass7 = "line";
    }
  }  
  
  toggleInput8() {
    this.isContentVisible8= !this.isContentVisible8;
    if (this.toggleClass8=== "line") {
      this.toggleClass8= "off-line";
    } else {
      this.toggleClass8= "line";
    }
  }  
}
