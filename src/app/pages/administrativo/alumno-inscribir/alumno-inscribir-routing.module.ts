import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoInscribirPage } from './alumno-inscribir.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoInscribirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoInscribirPageRoutingModule {}
