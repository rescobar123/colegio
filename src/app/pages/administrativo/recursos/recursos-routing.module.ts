import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosPage } from './recursos.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosPage,
    children: [
      {
        path: 'maestros',
        loadChildren: () => import('../maestros/maestros-routing.module').then(m => m.MaestrosPageRoutingModule)
      },
      {
        path: 'grados',
        loadChildren: () => import('../grados/grados-routing.module').then(m => m.GradosPageRoutingModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../cursos/cursos-routing.module').then(m => m.CursosPageRoutingModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosPageRoutingModule {}
