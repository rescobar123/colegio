import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {   
    path: 'login',loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {   
    path: 'home',loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'scaner',
    loadChildren: () => import('./pages/scaner/scaner.module').then( m => m.ScanerPageModule)
  },
  {
    path: 'actividades/:idCurso',
    loadChildren: () => import('./pages/alumno/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'actividad/:idActividad',
    loadChildren: () => import('./pages/alumno/actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/alumno/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./pages/alumno/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'maestro/grados/:idGrado',
    loadChildren: () => import('./pages/maestro/grados/grados.module').then( m => m.GradosPageModule)
  },
  {
    path: 'maestro/grados/:idGrado/actividades/',
    loadChildren: () => import('./pages/maestro/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'maestro/notas',
    loadChildren: () => import('./pages/maestro/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'administrativo/alumnos',
    loadChildren: () => import('./pages/administrativo/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'administrativo/recursos',
    loadChildren: () => import('./pages/administrativo/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'administrativo/alumno-opciones',
    loadChildren: () => import('./pages/administrativo/alumno-opciones/alumno-opciones.module').then( m => m.AlumnoOpcionesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}