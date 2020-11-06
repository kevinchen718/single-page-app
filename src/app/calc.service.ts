import { Injectable } from '@angular/core';
import { Tax } from './tax'
import { TaxCalcComponent } from './tax-calc/tax-calc.component';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  //taxObj:Tax

  constructor() { }

  doTheCalc(taxObj:Tax):Tax {
    
    taxObj.tax = taxObj.income * taxObj.taxRate;
    
    return taxObj;
  }



}
