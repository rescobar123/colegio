import { AlertI } from './../../../models/comunes/AlertI';
import { Component, OnInit } from '@angular/core';
import { AlumnoI } from '../../../models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CentroEducativoI } from '../../../models/CentroEducativo.Interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.page.html',
  styleUrls: ['./nuevo-alumno.page.scss'],
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

  public Users: AlumnoI;
  public col: any;
  public img1: any;
  public rows: any;

  constructor(private ws:AlumnoService, private route:Router, public alertController: AlertController) { 

  }

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
    form.fotografia = this.img1;
    console.log(form);
    this.ws.postAlumno(form).subscribe( data => {
      let alerta:AlertI = data;
      if(alerta.tipo == "success"){
        this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje, "");
        console.log("Exito");
        this.nuevoForm.reset();
      }else{
       this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje, alerta.error);
      }
    });
   
  }
  salir(){
    this.route.navigate(['administrativo/alumnos']);
  }

  async presentAlertMultipleButtons(titulo:string, mensaje:string, error:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event:any) => {
        this.img1 = event.target.result;
        console.log(this.img1);
      }
      reader.readAsDataURL(event.target.files[0]);  // to trigger onload
    }
    let fileList: FileList = event.target.files;  
    let file: File = fileList[0];
    console.log(file);
  }
}
