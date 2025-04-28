import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent implements OnInit {

  speedStud: number = 1200;
  stopStud: number = 20;
  countStud: number = 0;

  speedDef: number = 2000;
  stopDef: number = 11;
  countDef: number = 0;
  
  speedMaster: number = 1900;
  stopMaster: number = 10;
  countMaster: number = 0;

  speedNat: number = 1000;
  stopNat: number = 1400;
  countNat: number = 0;

  speedPart: number = 1600;
  stopPart: number = 250;
  countPart: number = 0;

  ngOnInit(): void {
    this.startCounting();
  }
  
  startCounting(): void {
    const intervalStud = this.speedStud / this.stopStud;
    const counterStud = setInterval(() => {
    this.countStud++;
      if (this.countStud >= this.stopStud) {
        clearInterval(counterStud);
      }
    }, intervalStud);

    const intervalDef = this.speedDef / this.stopDef;
    const counterDef = setInterval(() => {
    this.countDef++;
      if (this.countDef >= this.stopDef) {
        clearInterval(counterDef);
      }
    }, intervalDef);

    const intervalMaster = this.speedMaster / this.stopMaster;
    const counterMaster = setInterval(() => {
    this.countMaster++;
      if (this.countMaster >= this.stopMaster) {
        clearInterval(counterMaster);
      }
    }, intervalMaster);

    const intervalNat = this.speedNat / this.stopNat;
    const counterNat = setInterval(() => {
    this.countNat+=10;
      if (this.countNat >= this.stopNat) {
        clearInterval(counterNat);
      }
    }, intervalNat);    

    const intervalPart = this.speedPart / this.stopPart;
    const counterPart = setInterval(() => {
    this.countPart++;
      if (this.countPart >= this.stopPart) {
        clearInterval(counterPart);
      }
    }, intervalPart);      
  }

}
