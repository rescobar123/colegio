import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoOpcionesPageRoutingModule } from './alumno-opciones-routing.module';

import { AlumnoOpcionesPage } from './alumno-opciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoOpcionesPageRoutingModule
  ],
  declarations: [AlumnoOpcionesPage]
})
export class AlumnoOpcionesPageModule {}
