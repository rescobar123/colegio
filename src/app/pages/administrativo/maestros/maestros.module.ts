import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaestrosPageRoutingModule } from './maestros-routing.module';
import { MaestrosPage } from './maestros.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestrosPageRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
  ],
  declarations: [
    MaestrosPage,
    TodosComponent
  ],
  exports:[
    TodosComponent
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MaestrosPageModule {}
