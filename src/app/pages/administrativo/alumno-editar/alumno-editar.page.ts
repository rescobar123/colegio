import { Component, OnInit } from '@angular/core';
import { AlumnoI } from '../../../models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CentroEducativoI } from '../../../models/CentroEducativo.Interface';
import { AlertController } from '@ionic/angular';
import { AlertI } from '../../../models/comunes/AlertI';

@Component({
  selector: 'app-alumno-editar',
  templateUrl: './alumno-editar.page.html',
  styleUrls: ['./alumno-editar.page.scss'],
})
export class AlumnoEditarPage implements OnInit {
  public idAlumno:String;
  public alumno:AlumnoI;

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

  constructor(private activeRouter:ActivatedRoute, private ws:AlumnoService, private router:Router,  public alertController: AlertController) { }

  ngOnInit() {
    this.idAlumno = this.activeRouter.snapshot.paramMap.get("alumno");
    this.ws.getAlumnoById(this.idAlumno).subscribe(data=>{
      this.alumno = data;
      this.nuevoForm.setValue({
        'nombres' :this.alumno.nombres,
        'observacion' :this.alumno.observacion,
        'apellidos' : this.alumno.apellidos,
        'celular' :this.alumno.celular,
        'centroEducativo' :this.alumno.centroEducativo,
        'codigoAlumno' :this.alumno.codigoAlumno,
        'direccion' :this.alumno.direccion,
        'estado' :this.alumno.estado,
        'fotografia' :this.alumno.fotografia,
        'fechaCreacion' :this.alumno.fechaCreacion,
        'fechaNacimiento' :this.alumno.fechaNacimiento,
        
      
      });
     
    });
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
      let alerta:AlertI = data;
      if(alerta.tipo == "success"){
        this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje, alerta.error);
        //Falta agregar la alerta
        this.nuevoForm.reset();
      }else{
        console.log(alerta);
        this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje, alerta.error);
      }
    });
   
  }

  async presentAlertMultipleButtons(titulo:string, mensaje:string, error:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
