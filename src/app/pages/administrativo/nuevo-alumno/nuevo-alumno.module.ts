import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';

import { NuevoAlumnoPageRoutingModule } from './nuevo-alumno-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NuevoAlumnoPage } from './nuevo-alumno.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevoAlumnoPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [NuevoAlumnoPage],
  providers:[AlertController],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NuevoAlumnoPageModule {}
