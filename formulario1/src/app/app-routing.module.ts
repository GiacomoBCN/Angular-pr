import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './commons/home/home.component';//per far funzionare il nav
import { NotFoundComponent } from './commons/not-found/not-found.component'; //per far funzionare il nav
const routes: Routes = [
  {path: ' ', redirectTo: 'Home', pathMatch: 'full',  },
  {path: 'home', component: HomeComponent  },
  {path: ' my-forms ', loadChildren: () => import('./my-forms/my-forms.module').then(mod => mod.MyFormsModule)
  },
  {path: '**', component: NotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
