import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full'
  },
  {
    path: 'components',
    loadChildren: () => import('./pages/components-page/components-page.module').then(m => m.ComponentsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
