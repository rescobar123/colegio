import { Component, OnInit } from '@angular/core';
import { AlumnoI } from '../../../models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.page.html',
  styleUrls: ['./nuevo-alumno.page.scss'],
})
export class NuevoAlumnoPage implements OnInit {
  nuevoForm = new FormGroup({
    apellidos:  new FormControl(''),
    celular:  new FormControl(''),
    codigoAlumno:  new FormControl(''),
    direccion:  new FormControl(''),
    fechaNacimiento:  new FormControl(''),
    fotografia:  new FormControl(''),
    nombres:  new FormControl(''),
    observacion:  new FormControl(''),
});

  constructor(private ws:AlumnoService, private route:Router) { }

  ngOnInit() {
  }
  postForm(form:AlumnoI){
    this.ws.postAlumno(form).subscribe( data => {
      let alumno:AlumnoI = data;
      if(alumno.observacion == "Asociado"){
        console.log("Exito");
     //  this.alerta.showSuccess("Exito!","Vehiculo" + alumno.observacion );
      }else{
     //  this.alerta.showError("Error", alumno.observacion);
      }
    });
    this.route.navigate(['login']);
    
  }
  salir(){
    this.route.navigate(['login']);
  }
}
