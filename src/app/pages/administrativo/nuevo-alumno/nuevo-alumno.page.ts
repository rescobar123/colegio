import { Component, OnInit, Injectable } from '@angular/core';
import { AlumnoI } from '../../../models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CentroEducativoI } from '../../../models/CentroEducativo.Interface';
import { AlertController } from '@ionic/angular';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.page.html',
  styleUrls: ['./nuevo-alumno.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NuevoAlumnoPage implements OnInit {
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
    //aca deberia traer el id del centro educativo
    let centroEducativo:CentroEducativoI = {
      "idCentroEducativo": 1
    };
    form.centroEducativo =  centroEducativo;
    //hasta aca   
    form.estado = 1;
    form.fechaCreacion = "2021-11-26";

    console.log(form);
    this.ws.postAlumno(form).subscribe( data => {
      let alumno:AlumnoI = data;
      if(alumno.observacion == "Asociado"){
        this.presentAlertMultipleButtons();
        console.log("Exito");
        this.nuevoForm.reset();
      }else{
        console.log(alumno);
     //  this.alerta.showError("Error", alumno.observacion);
      }
    });
   
  }
  salir(){
    this.route.navigate(['administrativo/alumnos']);
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alumno Creado',
      message: 'Por Favor inscribe el alumno',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
