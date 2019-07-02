import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonsModule } from './commons/commons.module';
import { CustomerModule } from './customer/customer.module';
import {SuppliersModule} from './suppliers/suppliers.module';
import {StorinModule} from './suppliers/suppliers.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SuppliersRequestComponent } from './suppliers-request/suppliers-request.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersListComponent,
    SuppliersRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    CustomerModule,
    SuppliersModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SuppliersListComponent, SuppliersRequestComponent]
})
export class AppModule { }
