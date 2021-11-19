import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NuevoAlumnoPageRoutingModule } from './nuevo-alumno-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NuevoAlumnoPage } from './nuevo-alumno.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NuevoAlumnoPageRoutingModule
  ],
  declarations: [NuevoAlumnoPage]
})
export class NuevoAlumnoPageModule {}
