import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradosPageRoutingModule } from './grados-routing.module';

import { GradosPage } from './grados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradosPageRoutingModule
  ],
  declarations: [GradosPage]
})
export class GradosPageModule {}
