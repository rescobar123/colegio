import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AlumnosPageRoutingModule } from './alumnos-routing.module';
import { AlumnosPage } from './alumnos.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [AlumnosPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AlumnosPageModule {}
