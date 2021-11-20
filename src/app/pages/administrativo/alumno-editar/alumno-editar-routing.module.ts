import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoEditarPage } from './alumno-editar.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoEditarPageRoutingModule {}
