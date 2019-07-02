import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoringListComponent } from './storing-list/storing-list.component';

const routes: Routes = [
  {
    path: '',
    component: StoringListComponent
  },
  {
    path: 'in',
    component: Sto
  },
  {
    path: 'proveedores',
    component: SuppliersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
