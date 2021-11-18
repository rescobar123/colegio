import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoEditarPageRoutingModule } from './alumno-editar-routing.module';

import { AlumnoEditarPage } from './alumno-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoEditarPageRoutingModule
  ],
  declarations: [AlumnoEditarPage]
})
export class AlumnoEditarPageModule {}
