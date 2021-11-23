import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlumnoService } from '../../../services/ws/alumno.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlumnoI } from '../../../models/Alumno.Interface';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.page.html',
  styleUrls: ['./maestros.page.scss'],
})
export class MaestrosPage implements OnInit {
  nuevoForm = new FormGroup({
    apellidos:  new FormControl(''),
    celular:  new FormControl(''),
    centroEducativo: new FormControl(''),
    codigoAlumno:  new FormControl(''),
    direccion:  new FormControl(''),
    estado: new FormControl(''),
    fechaCreacion: new FormControl(''),
    fechaNacimiento:  new FormControl(''),
    fotografia:  new FormControl(''),
    nombres:  new FormControl(''),
    observacion:  new FormControl(''),
});


  constructor(private ws:AlumnoService, private route:Router, public alertController: AlertController) { }

  ngOnInit() {
  }
  postForm(form:AlumnoI){
    //hasta aca   
    form.estado = 1;
    form.fechaCreacion = "2021-11-26";

    console.log(form);
    this.ws.postAlumno(form).subscribe( data => {

    });
   
  }
}
