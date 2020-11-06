import { Component, OnInit } from '@angular/core';
import { Tax } from '../tax'
import { CalcService } from '../calc.service'

@Component({
  selector: 'app-tax-calc',
  templateUrl: './tax-calc.component.html',
  styleUrls: ['./tax-calc.component.scss']
})
export class TaxCalcComponent implements OnInit {

  //income : number
  //taxRate: number
  //tax: number
  taxObj: Tax = {
    income : 10000,
    taxRate: 0.15,
    tax: 10

  }

  constructor(private calcService: CalcService) { }

  ngOnInit(): void {
    //this.income = 1000
    //this.taxRate = 0.15
    //this.tax = 10;
    this.doCalc();
  }

  doCalc(): void {
    this.taxObj = this.calcService.doTheCalc(this.taxObj);
    console.log('Completed');
  }

  reCalc(): void {
    this.doCalc();
  }

  update1(value: number) { 
    this.taxObj.income = value;
    this.doCalc()
  }

  update2(value: number) { 
    this.taxObj.taxRate = value; 
    this.doCalc()
  }


}


