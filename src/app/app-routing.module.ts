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
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    path: 'administrativo/maestros',
    loadChildren: () => import('./pages/administrativo/maestros/maestros.module').then( m => m.MaestrosPageModule)
  },
  {
    path: 'administrativo/alumnos/nuevo-alumno',
    loadChildren: () => import('./pages/administrativo/nuevo-alumno/nuevo-alumno.module').then( m => m.NuevoAlumnoPageModule)
  },
  {
    path: 'alumno-editar',
    loadChildren: () => import('./pages/administrativo/alumno-editar/alumno-editar.module').then( m => m.AlumnoEditarPageModule)
  },
  {
    path: 'administrativo/grados',
    loadChildren: () => import('./pages/administrativo/grados/grados.module').then( m => m.GradosPageModule)
  },
  {
    path: 'administrativo/cursos',
    loadChildren: () => import('./pages/administrativo/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'administrativo/recursos',
    loadChildren: () => import('./pages/administrativo/recursos/recursos.module').then( m => m.RecursosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}