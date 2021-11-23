import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-opciones',
  templateUrl: './alumno-opciones.page.html',
  styleUrls: ['./alumno-opciones.page.scss'],
})
export class AlumnoOpcionesPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  verAlumnos(){
    this.router.navigate(['alumnos']);
  }

}
