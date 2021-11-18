import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosPage } from './alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosPage,
    children: [
      {
        path: 'nuevo-alumno',
        loadChildren: () => import('../nuevo-alumno/nuevo-alumno.module').then(m => m.NuevoAlumnoPageModule)
      },
      {
        path: 'alumno-editar',
        loadChildren: () => import('../alumno-editar/alumno-editar-routing.module').then(m => m.AlumnoEditarPageRoutingModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosPageRoutingModule {}
