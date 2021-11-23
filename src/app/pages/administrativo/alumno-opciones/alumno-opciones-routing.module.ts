import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoOpcionesPage } from './alumno-opciones.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoOpcionesPage,
    children: [
      {
        path: 'nuevo-alumno',
        loadChildren: () => import('../nuevo-alumno/nuevo-alumno.module').then(m => m.NuevoAlumnoPageModule)
      },
      {
        path: 'alumno-inscribir',
        loadChildren: () => import('../alumno-inscribir/alumno-inscribir.module').then(m => m.AlumnoInscribirPageModule)
      },
      {
        path: 'alumnos',
        loadChildren: () => import('../alumnos/alumnos.module').then(m => m.AlumnosPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoOpcionesPageRoutingModule {}
