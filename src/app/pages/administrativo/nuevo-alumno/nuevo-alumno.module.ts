import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';

import { NuevoAlumnoPageRoutingModule } from './nuevo-alumno-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NuevoAlumnoPage } from './nuevo-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevoAlumnoPageRoutingModule,
  ],
  declarations: [NuevoAlumnoPage],
  providers:[AlertController],
})
export class NuevoAlumnoPageModule {}
