import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaestrosPageRoutingModule } from './maestros-routing.module';
import { MaestrosPage } from './maestros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestrosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MaestrosPage]
})
export class MaestrosPageModule {}
