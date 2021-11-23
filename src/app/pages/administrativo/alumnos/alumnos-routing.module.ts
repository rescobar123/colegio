import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosPage } from './alumnos.page';


const routes: Routes = [
  {
    path: '',
    component: AlumnosPage,
  },
  {
    path: 'alumno-editar/:alumno',
    loadChildren: () => import('../alumno-editar/alumno-editar.module').then(m => m.AlumnoEditarPageModule),
  },
  {
    path: 'alumno-inscribir',
    loadChildren: () => import('../alumno-inscribir/alumno-inscribir.module').then(m => m.AlumnoInscribirPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AlumnosPageRoutingModule {}
