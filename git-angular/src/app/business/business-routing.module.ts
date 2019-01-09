import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
const routes: Routes = [{path: '', component: TestComponent}];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
  , exports: [RouterModule]
})
export class BusinessRoutingModule { }
