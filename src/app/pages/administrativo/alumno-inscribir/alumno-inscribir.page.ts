import { Component, OnInit, ViewChild } from '@angular/core';
import { CentroEducativoI } from '../../../models/CentroEducativo.Interface';
import { InscripcionI } from '../../../models/Inscripcion.Interface';
import { AlumnoI } from 'src/app/models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-alumno-inscribir',
  templateUrl: './alumno-inscribir.page.html',
  styleUrls: ['./alumno-inscribir.page.scss'],
})
export class AlumnoInscribirPage implements OnInit {

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  inscripcionForm = new FormGroup({
    idCentroEducativo: new FormControl(''),
    idAlumno:  new FormControl(''),
    idGrado:  new FormControl(''),
    anioEscolar: new FormControl(''),
    fechaInscripcion: new FormControl(''),
});

  constructor(private ws:AlumnoService, private router:Router) {

   }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "alumno-inscribir")
        this.outlet.deactivate();
    });
  }
  postInscripcion(form:InscripcionI){
    //aca deberia traer el id del centro educativo
    let idCentroEducativo:CentroEducativoI = {
      "idCentroEducativo": 1
    };
    let idAlumno:AlumnoI = {
      "idAlumno" : 1
    }
    form.idCentroEducativo =  idCentroEducativo;
    form.idAlumno = idAlumno;
    //hasta aca   
    console.log("aca ha llegado")
    console.log(form);
    this.ws.postInscripcion(form).subscribe( data => {
      let inscripcion:InscripcionI = data;
      if(inscripcion){
        console.log("Exito");
      }else{
        console.log(inscripcion);
      }
    });
   
  }
}
