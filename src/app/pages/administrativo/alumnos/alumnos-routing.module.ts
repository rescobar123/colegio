import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosPage } from './alumnos.page';
import { LoginPageModule } from '../../login/login.module';

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
        loadChildren: () => import('../alumno-editar/alumno-editar.module').then(m => m.AlumnoEditarPageModule),
      },
      {
        path: 'alumno-inscribir',
        loadChildren: () => import('../alumno-inscribir/alumno-inscribir.module').then(m => m.AlumnoInscribirPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosPageRoutingModule {}
