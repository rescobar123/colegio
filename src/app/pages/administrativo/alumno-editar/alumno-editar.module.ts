import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AlumnoEditarPageRoutingModule } from './alumno-editar-routing.module';

import { AlumnoEditarPage } from './alumno-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AlumnoEditarPageRoutingModule
  ],
  declarations: [AlumnoEditarPage]
})
export class AlumnoEditarPageModule {}
