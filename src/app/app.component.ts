import { Component } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public appPages;
  public labels;
  public idRol;
  constructor(private activeRouter:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.idRol = 3;
     if(this.idRol == 1){
       //Obtener los cursos del alumno y meterlo aca.
        this.appPages =  [
          { title: 'Ciencias Naturales', url: '/actividades/Ciencias Naturales', icon: 'home' },
          { title: 'Idioma Espaniol', url: '/actividades/Idioma Espaniol', icon: 'paper-plane' },
          { title: 'Ingles', url: '/actividades/Ingles', icon: 'heart' },
        ];

        this.labels = [
          { title: 'Calificaciones', url: '/calificaciones', icon: 'home' },
          { title: 'Notas', url: '/notas', icon: 'heart' },
        ];

     }else if(this.idRol == 2){
       //Obtener los grados del maestro y meterlos aca
        this.appPages =  [
          { title: '1ero. Primaria', url: 'maestro/grados/1ero. Primaria', icon: 'people' },
          { title: '2do. Primaria', url: 'maestro/grados/2do. Primaria', icon: 'people' },
          { title: '3ero. Primaria', url: 'maestro/grados/3ero. Primaria', icon: 'people' },
          { title: '4to. Primaria', url: 'maestro/grados/4to. Primaria', icon: 'people' },
        ];

        this.labels = [
          { title: 'Calificaciones', url: '/calificaciones', icon: 'home' },
          { title: 'Notas', url: '/notas', icon: 'heart' },
        ];
     }else if(this.idRol == 3){
      //Obtener los grados del administrativo y meterlos aca
       this.appPages =  [
         { title: 'Alumnos', url: 'administrativo/alumnos', icon: 'people' },
         { title: 'Recursos', url: 'administrativo/recursos', icon: 'layers' },
       ];

       this.labels = [
         { title: 'Calificaciones', url: '/calificaciones', icon: 'home' },
         { title: 'Notas', url: '/notas', icon: 'heart' },
       ];
    }else{
      this.appPages =  [
        { title: 'Home', url: 'home', icon: 'home' },

      ];
     }
  }

}
