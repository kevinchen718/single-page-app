import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StaffListComponent} from './staff-list/staff-list.component'
import {TaxCalcComponent} from './tax-calc/tax-calc.component'

const routes: Routes = [
  { path: '', redirectTo: '/staff-list', pathMatch: 'full' },
  { path: 'staff-list', component: StaffListComponent },
  { path: 'tax-calc', component: TaxCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
