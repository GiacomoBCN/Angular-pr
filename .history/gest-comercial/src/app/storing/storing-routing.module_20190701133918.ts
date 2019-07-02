import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoringListComponent } from './storing-list/storing-list.component';
import { StoringIncomingComponent } from './storing-incoming/storing-incoming.component';

const routes: Routes = [
  {
    path: '',
    component: StoringListComponent
  },
  {
    path: 'in',
    component: StoringIncomingComponent
  },
  {
    path: 'out',
    component: sto
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
