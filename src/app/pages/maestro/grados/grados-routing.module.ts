import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradosPage } from './grados.page';


const routes: Routes = [
  {
    path: '',
    component: GradosPage,
    children: [
      {
        path: 'actividades',
        loadChildren: () => import('../actividades/actividades.module').then(m => m.ActividadesPageModule)
      },
      {
        path: 'notas',
        loadChildren: () => import('../notas/notas.module').then(m => m.NotasPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradosPageRoutingModule {}
