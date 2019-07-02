import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { CustomerDataComponent } form
<

const routes: Routes = [
{path: ' ', redirectTo: 'Home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'customer', component: CustomerListComponent},

{path: 'customer_detail/:id', component: CustomerDataComponent },

{path: 'suppliers', component: SuppliersListComponent},
{path: 'storing', loadChildren: () => import ('./storing/storing.module').then(mod => mod.StoringModule) },
{path: '**' , component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
