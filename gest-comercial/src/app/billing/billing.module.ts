import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { FormSuppliersComponent } from './form-suppliers/form-suppliers.component';
import { ToCustomersComponent } from './to-customers/to-customers.component';

@NgModule({
  declarations: [FormSuppliersComponent, ToCustomersComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  exports: [FormSuppliersComponent, ToCustomersComponent]
})
export class BillingModule { }
