import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AlumnoInscribirPageRoutingModule } from './alumno-inscribir-routing.module';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AlumnoInscribirPage } from './alumno-inscribir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AlumnoInscribirPageRoutingModule
  ],
  declarations: [AlumnoInscribirPage]
})
export class AlumnoInscribirPageModule {}
