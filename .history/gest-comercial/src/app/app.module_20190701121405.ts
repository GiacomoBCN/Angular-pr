import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonsModule } from './commons/commons.module';
import { CustomerModle } from './customer/customer.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    CustomerModle,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
