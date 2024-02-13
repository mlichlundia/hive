import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsPageComponent } from './signals-page.component';

const routes: Routes = [
  { path: '', component: SignalsPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignalsPageRoutingModule {}
