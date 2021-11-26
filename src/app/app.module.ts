import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, AlertController } from '@ionic/angular';
import { AppComponent  } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaestrosPage } from './pages/administrativo/maestros/maestros.page';
import { MaestrosPageModule } from './pages/administrativo/maestros/maestros.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    MaestrosPageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AlertController],
  bootstrap: [AppComponent],
})
export class AppModule {}
