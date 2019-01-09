import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './business/test/test.component';

const routes: Routes = [ { path: '', redirectTo: '/business', pathMatch: 'full' },
{ path: 'business', loadChildren: './business/business.module#BusinessModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
