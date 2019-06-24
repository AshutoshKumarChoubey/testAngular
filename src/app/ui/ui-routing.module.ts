import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../modules/page-not-found/page-not-found.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {
    path: '',component: UiComponent,
    loadChildren: '../modules/auth/auth.module#AuthModule'
  },
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'page-not-found', component: PageNotFoundComponent },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
