import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';

const routes: Routes = [
{path: ' ', redirectTo: 'Home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'customer', component: CustomerListComponent},
{path: 'suppliers', component: SuppliersListComponent},
{path: 'storing', loadChildren: () => import ('./storing/storing.module').then(mod => mod.StoringModule) },
{path: '**' , component: NotFoundComponent},

{path:'customer_detail/:i'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
